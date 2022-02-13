import axios from 'axios';
import {
  getBrandParam,
  getColorParam,
  getSearchParam,
  getSortingParam,
} from '../../utils/functions';
import paths from '../../utils/path';
import {
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS,
  SET_CURRENT_PAGE,
} from '../actionTypes';

export const fetchProducts =
  (selectedColor, selectedBrand, selectedSortingType, searchText, page) =>
  async dispatch => {
    console.log(
      selectedColor,
      selectedBrand,
      selectedSortingType,
      searchText,
      page,
    );
    const url = `${paths.PRODUCTS}?page=${page}${getColorParam(
      selectedColor,
    )}${getBrandParam(selectedBrand)}${getSearchParam(
      searchText,
    )}${getSortingParam(selectedSortingType)}`;

    try {
      const response = await axios.get(url);
      dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
      dispatch(fetchProductsError(error));
    }
  };

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products,
});

export const fetchProductsError = error => ({
  type: FETCH_PRODUCTS_ERROR,
  error,
});

export const setCurrentPage = page => ({
  type: SET_CURRENT_PAGE,
  page,
});
