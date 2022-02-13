import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import products from './productsReducer';
import filters from './filterReducer';
import basket from './basketReducer';
import search from './searchReducer';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    products,
    filters,
    basket,
    search,
  });

export default createRootReducer;
