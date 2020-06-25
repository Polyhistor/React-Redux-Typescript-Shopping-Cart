import {
  AddToCartAction,
  DeleteFromCartAction,
  FetchPhotosAction,
} from '../interfaces/main';

export type CartAction =
  | AddToCartAction
  | DeleteFromCartAction
  | FetchPhotosAction;
