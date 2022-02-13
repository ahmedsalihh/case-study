import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../actionTypes';

const items = JSON.parse(localStorage.getItem('items'));

const defaultState = {
  items: items !== null ? items : [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      const tmpItems = state.items;
      tmpItems.push(action.item);
      localStorage.setItem('items', JSON.stringify(tmpItems));
      return { ...state, items: [...tmpItems] };
    case REMOVE_FROM_BASKET:
      const arr = state.items.filter(f => f.id !== action.id);
      localStorage.setItem('items', JSON.stringify(arr));
      return {
        ...state,
        items: [...arr],
      };
    default:
      return state;
  }
};
