// Utilities
import { addToCartReducer } from '../../reducers/cart';
import { actionTypes } from '../../utils/constants';

describe('delete from cart reducer', () => {
  it('should return the initial statee', () => {
    expect(addToCartReducer(undefined, {})).toEqual({
      addedItems: [],
      total: 0,
    });
  });

  it('should handle updating the state products and sum', () => {
    expect(
      addToCartReducer(
        { addedItems: [{ id: 1, name: 'Sledgehammer', price: 125 }], total: 0 },
        {
          type: actionTypes.deleteFromCartAction,
          payload: {
            id: 1,
            name: 'Sledgehammer',
            price: 125,
          },
        }
      )
    ).toEqual({
      addedItems: [],
      total: NaN,
    });
  });
});
