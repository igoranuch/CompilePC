import './bootstrap';
import testParseComponentsData from './category/parseCategoryProducts';
import parseCategoryProducts from './category/testCategory';
import getProducts from './products';
import getProduct from './product';
import getAssemblies from './assemblies';
import { getAssembly, insertAssembly, deleteAssembly } from './assembly';

// eslint-disable-next-line import/prefer-default-export
export {
  testParseComponentsData,
  parseCategoryProducts,
  getProducts,
  getProduct,
  getAssemblies,
  getAssembly,
  insertAssembly,
  deleteAssembly,
};
