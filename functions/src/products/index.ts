import Joi from 'joi';
import { getDB } from '../bootstrap';
import { DEFAULT_REGION } from '../common/constants';
import * as functions from 'firebase-functions';
import normalizeFilter from '../common/normalizeFilter';
import getCompatiblePropsValues from '../../../src/utils/getCompatiblePropsValues';

const getProductsSchema = Joi.object({
  minPrice: Joi.number(),
  maxPrice: Joi.number(),
}).pattern(
  Joi.string(),
  Joi.alternatives(Joi.array().items(Joi.string()), Joi.string()),
);

const getProducts = functions
  .region(DEFAULT_REGION)
  .https.onCall(async (data) => {
    const {
      collectionName,
      filter,
      pageParam,
      pageSize,
      compatibleFilters,
      searchValue,
    } = data;

    const compatiblePropsValues = getCompatiblePropsValues(
      collectionName,
      compatibleFilters,
    );

    await getProductsSchema.validateAsync(filter);

    const db = await getDB();
    const normalizedCompatibleFilters = normalizeFilter(compatiblePropsValues);
    const normalizedFilter = normalizeFilter(filter);

    const trimedValue = searchValue.trim();

    const searchFilter = Object.assign(
      trimedValue && { name: new RegExp(trimedValue, 'i') },
      {},
    );

    const cursor = await db
      .collection(collectionName)
      .find({
        ...normalizedFilter,
        ...normalizedCompatibleFilters,
        ...searchFilter,
      })
      .limit(pageSize)
      .skip((pageParam - 1) * pageSize);

    const result = await cursor.toArray();

    const count = result.length;

    return {
      result,
      nextPage: count < pageSize ? null : pageParam + 1,
    };
  });

export default getProducts;
