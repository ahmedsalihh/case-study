import axios from 'axios';
import { getSortingParam } from '../../utils/functions';
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
    const request = {
      page,
      name: searchText ? searchText : '',
      color: selectedColor && selectedColor.id,
      brand: selectedBrand && selectedBrand.id,
      ...getSortingParam(selectedSortingType),
    };
    const url = paths.PRODUCTS;

    try {
      const response = await axios.post(url, request);
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
