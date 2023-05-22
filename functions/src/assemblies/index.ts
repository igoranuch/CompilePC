import Joi = require('joi');
import { getDB } from '../bootstrap';
import { DEFAULT_REGION } from '../common/constants';
import * as functions from 'firebase-functions';
import { FullAssembly, Part, PartType } from '../../../types';

const getAssembliesSchema = Joi.object({
  userId: Joi.string(),
});

const getAssemblies = functions
  .region(DEFAULT_REGION)
  .https.onCall(async (data) => {
    const { userId } = data;

    await getAssembliesSchema.validateAsync({ userId });

    const db = await getDB();

    try {
      const cursor = db.collection('assemblies').find({ userId });

      const result = await cursor.toArray();

      const fullAssemblies = result.map(
        (assembly) =>
          ({
            ...assembly,
            ['_id']: assembly._id.toString(),
          } as FullAssembly),
      );

      console.log(fullAssemblies);

      const assemblies = await Promise.all(
        fullAssemblies.map(async (assembly) => {
          const products = await Promise.all(
            assembly.parts.map(async (part: PartType) => {
              const rawPart = (await db
                .collection<Part>(part.collection)
                .findOne({ id: part.id })) as Part;
              return { ...rawPart, category: part.category };
            }),
          );

          return { ...assembly, ['parts']: products };
        }),
      );

      return assemblies;
    } catch (error) {
      throw new functions.https.HttpsError('not-found', 'Assemblies not found');
    }
  });

export default getAssemblies;
