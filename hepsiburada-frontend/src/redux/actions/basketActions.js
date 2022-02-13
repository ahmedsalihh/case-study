import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../actionTypes';

export const addToBasket = item => ({
  type: ADD_TO_BASKET,
  item,
});

export const removeFromBasket = id => ({ type: REMOVE_FROM_BASKET, id });
