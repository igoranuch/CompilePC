/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { Assembly, CategoryName, CollectionName, PartType } from '../../types';
import { ProductCategories } from '../common/constants';

const normalizeAssembly = (assembly: Assembly): PartType[] => {
  const normalizedAssembly = Object.entries(assembly).map(
    ([category, part]) => {
      if (part) {
        return {
          collection: ProductCategories[category as CategoryName]
            .collectionName as CollectionName,
          category,
          id: part.id,
        };
      }
      return null;
    },
  );

  const result = normalizedAssembly.filter(
    (part) => part !== null,
  ) as PartType[];

  return result;
};

export default normalizeAssembly;
