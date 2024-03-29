import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from '@tanstack/react-query';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Builder } from '../../types/index';
import { UIContext } from '../components/UIContext';
import Products from '../api/products';
import QUERY_KEY_FACTORIES from '../common/queryKeyFactories';
import {
  selectCompatibleFilters,
  selectOpenedBuilder,
} from '../store/builder/selectors';

// eslint-disable-next-line @typescript-eslint/naming-convention
type useProductProps = {
  builder: Builder;
  pageSize: number;
  searchValue: string;
};

const useProducts = ({
  builder,
  pageSize,
  searchValue,
}: useProductProps): UseInfiniteQueryResult => {
  const { setAlert } = useContext(UIContext);

  const openedBuilder = useSelector(selectOpenedBuilder);

  const compatibleFilter = useSelector(selectCompatibleFilters);

  const { categoryName, collectionName, filter } = builder;

  const isEnabled = openedBuilder === categoryName;

  return useInfiniteQuery(
    QUERY_KEY_FACTORIES.PRODUCTS.list(categoryName, filter, searchValue),
    ({ pageParam = 1 }) =>
      Products.list(
        collectionName,
        filter,
        pageParam,
        pageSize,
        compatibleFilter,
        searchValue,
      ),
    {
      enabled: isEnabled,
      getNextPageParam: (lastPage) =>
        lastPage.nextPage ? lastPage.nextPage : false,
      onError: () =>
        setAlert({
          show: true,
          severity: 'error',
          message: `Could not fetch products. Try again later.`,
        }),
    },
  );
};

export default useProducts;
