// Utils
import { actionTypes } from '../utils/constants';
import { CartAction } from '../actions/types';
import { Cart, EnumProduct } from '../interfaces/main';
import { numberFormatter } from '../utils/utils';

const initialState: Cart = {
  addedItems: [],
  total: 0,
};

/**
 * @todo add a type module for each state of the redux state
 * reducer that handles creating, updating and removing products in the cart , it handles a photo update as well
 * @Function
 * @return {Object}
 */

export const addToCartReducer = (
  state: Cart | any = initialState,
  action: CartAction
): Object => {
  let newTotal: number = 0;
  let currentItem: EnumProduct | any = action.payload;
  let existingItem: EnumProduct =
    state.addedItems &&
    state.addedItems.filter(
      (item: EnumProduct) => item.id === currentItem.id
    )[0];

  switch (action.type) {
    case actionTypes.addToCartACtion:
      if (existingItem) {
        newTotal = numberFormatter(state.total + existingItem.price);

        return {
          ...state,
          addedItems: state.addedItems.map((item: EnumProduct) =>
            item.id === currentItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: newTotal,
        };
      } else {
        currentItem.quantity = 1;
        newTotal = numberFormatter(state.total + currentItem.price);

        return {
          ...state,
          addedItems: [...state.addedItems, currentItem],
          total: newTotal,
        };
      }

    case actionTypes.deleteFromCartAction:
      const totalSubtract = existingItem.price * existingItem.quantity;
      newTotal = numberFormatter(state.total - totalSubtract);

      return {
        ...state,
        addedItems: state.addedItems.filter(
          (item: EnumProduct) => item.id !== currentItem.id
        ),
        total: newTotal,
      };

    case actionTypes.fetchPhotoAction:
      return { ...state, photo: action.payload };

    default:
      return state;
  }
};
