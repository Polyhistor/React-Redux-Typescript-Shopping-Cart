// Utilities
import { actionTypes } from '../../utils/constants';
import { addToCartAction } from '../../actions/cart';
import { makeMockStore } from '../../utils/testUtils';
import data from '../../data/data.json';

describe('add to cart redux action', () => {
  it('registers correctly to the store', async () => {
    // Arrange

    // test data
    const Product = data[0];

    // creating a mock store
    const store = makeMockStore();

    // Act
    store.dispatch(addToCartAction(Product));
    const actions = store.getActions();

    // Assert
    expect(actions[0]).toEqual({
      payload: Product,
      type: actionTypes.addToCartACtion,
    });
  });
});
