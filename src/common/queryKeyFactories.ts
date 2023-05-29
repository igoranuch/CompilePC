import { CategoryName, SelectedFilter } from '../../types/index';

const QUERY_KEY_FACTORIES = {
  PRODUCTS: {
    all: () => ['products'],
    list: (
      category: CategoryName,
      filter: SelectedFilter,
      searchValue: string,
    ) => [
      {
        ...QUERY_KEY_FACTORIES.PRODUCTS.all(),
        category,
        filter,
        searchValue,
      },
    ],
    get: (id: string, category: CategoryName) => [
      { ...QUERY_KEY_FACTORIES.PRODUCTS.all(), id, category },
    ],
  },
  ASSEMBLIES: {
    all: () => ['assemblies'],
    list: (userId: string) => [
      {
        ...QUERY_KEY_FACTORIES.ASSEMBLIES.all(),
        userId,
      },
    ],
    get: (id: string) => [{ ...QUERY_KEY_FACTORIES.PRODUCTS.all(), id }],
  },
};

export default QUERY_KEY_FACTORIES;
