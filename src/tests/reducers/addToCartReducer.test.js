// Utilities
import { addToCartReducer } from '../../reducers/cart';
import { actionTypes } from '../../utils/constants';

describe('add to cart reducer', () => {
  it('should return the initial statee', () => {
    expect(addToCartReducer(undefined, {})).toEqual({
      addedItems: [],
      total: 0,
    });
  });

  it('should handle updating the state products and sum', () => {
    expect(
      addToCartReducer(
        { addedItems: [], total: 0 },
        {
          type: actionTypes.addToCartACtion,
          payload: {
            id: 1,
            name: 'Sledgehammer',
            price: 125,
          },
        }
      )
    ).toEqual({
      addedItems: [{ id: 1, name: 'Sledgehammer', price: 125, quantity: 1 }],
      total: 125,
    });
  });
});
