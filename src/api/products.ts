import {
  CollectionName,
  CompatibleFilter,
  Filter,
  FullProduct,
  Part,
} from '../../types';
import functions from '../common/firebaseFunctons';

type Response = {
  result: Part[];
  nextPage: number | null;
};

const Products = {
  get: async (
    id: string,
    collectionName: CollectionName,
  ): Promise<FullProduct> => {
    const getProduct = functions.httpsCallable('getProduct');
    const { data: product }: { data: FullProduct } = await getProduct({
      id,
      collectionName,
    });
    return product;
  },
  list: async (
    collectionName: CollectionName,
    filter: Filter,
    pageParam: number,
    pageSize: number,
    compatibleFilters: CompatibleFilter,
    searchValue: string,
  ): Promise<Response> => {
    const getProducts = functions.httpsCallable('getProducts');
    const { data: result }: { data: Response } = await getProducts({
      collectionName,
      filter,
      pageParam,
      pageSize,
      compatibleFilters,
      searchValue,
    });
    return result;
  },
};

export default Products;
