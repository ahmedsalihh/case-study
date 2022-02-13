import { sortingTypes } from '../../utils/constants';
import {
  FETCH_COLOR_FILTERS_ERROR,
  FETCH_COLOR_FILTERS_SUCCESS,
  FETCH_BRAND_FILTERS_ERROR,
  FETCH_BRAND_FILTERS_SUCCESS,
  SET_SELECTED_COLOR,
  SET_SELECTED_BRAND,
  SET_SELECTED_SORTING_TYPE,
} from '../actionTypes';

const defaultState = {
  colorFilters: null,
  brandFilters: null,
  selectedColor: null,
  selectedBrand: null,
  selectedSortingType: sortingTypes[0],
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_COLOR_FILTERS_SUCCESS:
      return {
        ...state,
        colorFilters: action.colorFilters,
        error: null,
      };
    case FETCH_COLOR_FILTERS_ERROR:
      return { ...state, error: action.error };
    case FETCH_BRAND_FILTERS_SUCCESS:
      return {
        ...state,
        brandFilters: action.brandFilters,
        error: null,
      };
    case FETCH_BRAND_FILTERS_ERROR:
      return { ...state, error: action.error };
    case SET_SELECTED_COLOR:
      return {
        ...state,
        selectedColor:
          state.selectedColor &&
          state.selectedColor.id === action.selectedColor.id
            ? null
            : action.selectedColor,
      };
    case SET_SELECTED_BRAND:
      return {
        ...state,
        selectedBrand:
          state.selectedBrand &&
          state.selectedBrand.id === action.selectedBrand.id
            ? null
            : action.selectedBrand,
      };
    case SET_SELECTED_SORTING_TYPE:
      return { ...state, selectedSortingType: action.selectedSortingType };
    default:
      return state;
  }
};
