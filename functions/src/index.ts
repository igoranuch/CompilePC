import './bootstrap';
import parseCategoryProducts from './category/parseCategoryProducts';
import testCategory from './category/testCategory';
import getProducts from './products';
import getProduct from './product';
import getAssemblies from './assemblies';
import { getAssembly, insertAssembly } from './assembly';

// eslint-disable-next-line import/prefer-default-export
export {
  parseCategoryProducts,
  testCategory,
  getProducts,
  getProduct,
  getAssemblies,
  getAssembly,
  insertAssembly,
};
