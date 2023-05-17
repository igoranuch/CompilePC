import Joi = require('joi');
import { getDB } from '../bootstrap';
import { DEFAULT_REGION } from '../common/constants';
import * as functions from 'firebase-functions';
import { FullAssembly } from '../../../types';

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

    try {
      const assembly = (await db
        .collection<FullAssembly>('assemblies')
        .findOne({ id })) as FullAssembly;

      return assembly;
    } catch (error) {
      throw new functions.https.HttpsError('not-found', 'Product not found');
    }
  });

const insertAssembly = functions
  .region(DEFAULT_REGION)
  .https.onCall(async (data) => {
    const { description, name } = data as FullAssembly;

    await insertAssemblySchema.validateAsync({ description, name });

    const db = await getDB();

    try {
      const assembly = await db.collection('assemblies').insertOne(data);

      return assembly;
    } catch (error) {
      throw new functions.https.HttpsError('not-found', 'Product not found');
    }
  });

export { getAssembly, insertAssembly };
