import Joi = require('joi');
import { getDB } from '../bootstrap';
import { DEFAULT_REGION } from '../common/constants';
import * as functions from 'firebase-functions';

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
      const cursor = await db.collection('assemblies').find({ userId });

      const result = await cursor.toArray();

      console.log(result);

      return result;
    } catch (error) {
      throw new functions.https.HttpsError('not-found', 'Assemblies not found');
    }
  });

export default getAssemblies;
