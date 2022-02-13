import { sortingTypes } from '../../utils/constants';
import {
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS,
  SET_CURRENT_PAGE,
} from '../actionTypes';

const defaultState = {
  products: null,
  colorFilters: null,
  brandFilters: null,
  selectedColor: null,
  selectedBrand: null,
  selectedSortingType: sortingTypes[0],
  page: 1,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products.productList,
        colorFilters: action.products.colors,
        brandFilters: action.products.brands,
        error: null,
      };
    case SET_CURRENT_PAGE:
      return { ...state, page: action.page };
    case FETCH_PRODUCTS_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
