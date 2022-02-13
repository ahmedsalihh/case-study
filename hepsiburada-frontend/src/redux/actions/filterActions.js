import axios from 'axios';
import paths from '../../utils/path';
import {
  FETCH_COLOR_FILTERS_ERROR,
  FETCH_COLOR_FILTERS_SUCCESS,
  FETCH_BRAND_FILTERS_ERROR,
  FETCH_BRAND_FILTERS_SUCCESS,
  SET_SELECTED_COLOR,
  SET_SELECTED_BRAND,
  SET_SELECTED_SORTING_TYPE,
} from '../actionTypes';

export const fetchColorFilters = () => async dispatch => {
  const url = paths.COLOR_FILTERS;
  try {
    const response = await axios.get(url);
    dispatch(fetchColorFiltersSuccess(response.data));
  } catch (error) {
    dispatch(fetchColorFiltersError(error));
  }
};

export const fetchColorFiltersSuccess = colorFilters => ({
  type: FETCH_COLOR_FILTERS_SUCCESS,
  colorFilters,
});

export const fetchColorFiltersError = error => ({
  type: FETCH_COLOR_FILTERS_ERROR,
  error,
});

export const fetchBrandFilters = () => async dispatch => {
  const url = paths.BRAND_FILTERS;
  try {
    const response = await axios.get(url);
    dispatch(fetchBrandFiltersSuccess(response.data));
  } catch (error) {
    dispatch(fetchBrandFiltersError(error));
  }
};

export const fetchBrandFiltersSuccess = brandFilters => ({
  type: FETCH_BRAND_FILTERS_SUCCESS,
  brandFilters,
});

export const fetchBrandFiltersError = error => ({
  type: FETCH_BRAND_FILTERS_ERROR,
  error,
});

export const setSelectedColor = selectedColor => ({
  type: SET_SELECTED_COLOR,
  selectedColor,
});

export const setSelectedBrand = selectedBrand => ({
  type: SET_SELECTED_BRAND,
  selectedBrand,
});

export const selSelectedSortingType = selectedSortingType => ({
  type: SET_SELECTED_SORTING_TYPE,
  selectedSortingType,
});
