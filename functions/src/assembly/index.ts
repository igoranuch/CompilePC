import Joi = require('joi');
import { getDB } from '../bootstrap';
import { DEFAULT_REGION } from '../common/constants';
import * as functions from 'firebase-functions';
import { CreatedAssembly, Part } from '../../../types';
import { ObjectId } from 'mongodb';

const getAssemblySchema = Joi.object({
  id: Joi.string(),
});

const insertAssemblySchema = Joi.object({
  userId: Joi.string(),
  name: Joi.string(),
  description: Joi.string(),
});

const getAssembly = functions
  .region(DEFAULT_REGION)
  .https.onCall(async (data) => {
    const { id } = data;

    await getAssemblySchema.validateAsync({ id });

    const db = await getDB();

    const _id = new ObjectId(id);

    try {
      const res = (await db
        .collection<CreatedAssembly>('assemblies')
        .findOne({ _id })) as CreatedAssembly;

      const products = await Promise.all(
        res.parts.map(async (part) => {
          const rawPart = await db
            .collection<Part>(part.collection)
            .findOne({ id: part.id });

          return { ...rawPart, category: part.category };
        }),
      );

      return { ...res, ['parts']: products };
    } catch (error) {
      throw new functions.https.HttpsError('not-found', 'Assembly not found');
    }
  });

const insertAssembly = functions
  .region(DEFAULT_REGION)
  .https.onCall(async (data) => {
    const { description, name } = data;

    await insertAssemblySchema.validateAsync({ description, name });

    const db = await getDB();

    try {
      const result = await db.collection('assemblies').insertOne(data);
      const assemblyId = result.insertedId.toString();
      return { assemblyId };
    } catch (error) {
      throw new functions.https.HttpsError(
        'already-exists',
        'Assembly not inserted',
      );
    }
  });

export { getAssembly, insertAssembly };
