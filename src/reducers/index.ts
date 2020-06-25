// Utils
import { addToCartReducer } from './cart';
import { combineReducers } from 'redux';
import { StoreState } from '../interfaces/main';

export const reducers = combineReducers<StoreState>({
  cart: addToCartReducer,
});
