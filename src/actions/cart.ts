// Libraries
import axios from 'axios';

// Utilities
import {
  AddToCartAction,
  DeleteFromCartAction,
  EnumProduct,
  Photo,
  FetchPhotosAction,
} from '../interfaces/main';
import { actionTypes } from '../utils/constants';
import { Dispatch } from 'redux';

/**
 * Redux action that receives products and dispatch add to cart
 * @function
 * @param product
 * @returns {Object}
 */
export const addToCartAction = (product: EnumProduct): AddToCartAction => {
  return {
    type: actionTypes.addToCartACtion,
    payload: product,
  };
};

/**
 * Redux action that receives product ID and dispatch delete from cart
 * @function
 * @param product
 * @returns {Object}
 */
export const deleteFromCartAction = (
  product: EnumProduct
): DeleteFromCartAction => {
  return {
    type: actionTypes.deleteFromCartAction,
    payload: product,
  };
};

/**
 * Redux action that receives photo from JSON placeholder API and dispatch it
 * @function
 * @param product
 * @returns {Object}
 */

export const fetchPhotoAction = () => async (dispatch: Dispatch) => {
  // getting API address from environment variables
  const url = process.env.REACT_APP_JSON_PLACDEHOLDER_API;

  // making the axios call
  const response = await axios.get<Photo[]>(url);

  // dispatching on success
  try {
    dispatch<FetchPhotosAction>({
      type: actionTypes.fetchPhotoAction,
      payload: response.data,
    });
  } catch (err) {
    throw new Error(err);
  }
};
