import { SET_SEARCH_TEXT } from '../actionTypes';

const defaultState = {
  text: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return { ...state, text: action.text };
    default:
      return state;
  }
};
