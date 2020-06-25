import { actionTypes } from '../utils/constants';

/**
 * @todo break this file into separate, isolated files for each module
 * Products interface, can be used for maps, loop ,etc
 * @interface
 */

export interface EnumProduct {
  id?: Number;
  name: String;
  price: number;
  quantity?: number;
}

/**
 * Products interface extension to array, can be used for props, HOC, etc
 * @interface
 * @extends Array
 */

export interface Products extends Array<EnumProduct> {}

/**
 * Add To Cart interface used for redux action
 * @interface
 */

export interface AddToCartAction {
  type: actionTypes.addToCartACtion;
  payload: EnumProduct;
}

/**
 * Delete From Cart interface used for redux action
 * @interface
 */

export interface DeleteFromCartAction {
  type: actionTypes.deleteFromCartAction;
  payload: EnumProduct;
}

/**
 * LinkButton component interface
 * @interface
 */

export interface LinkBUtton {
  to: String;
  label: String;
}

/**
 * Store cart interface
 * @interface
 */

export interface Cart {
  addedItems: Products;
  photo?: String;
  total: number;
}

/**
 * Atomic interface for cart product props
 * @interface
 */

export interface CartProps {
  cart: Cart;
}

/**
 * Redux store interface
 * @interface
 */

export interface StoreState {
  cart: Cart | Object;
}

/**
 * Photos interface
 * @interface
 */

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

/**
 * Fetch photo redux action interface
 * @interface
 */

export interface FetchPhotosAction {
  type: actionTypes.fetchPhotoAction;
  payload: Photo[];
}

/**
 * Photo component props interface
 * @interface
 */

export interface PhotoConnected {
  fetchPhotoAction: Function;
  thumbnailUrl: String;
}

/**
 * Product box props interface
 * @interface
 */

export interface ProductBox {
  product: EnumProduct;
}

/**
 * Products listing props interface
 * @interface
 */

export interface ProductListing {
  productsData: Products;
}
