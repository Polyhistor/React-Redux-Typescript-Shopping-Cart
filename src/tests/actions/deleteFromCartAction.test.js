// Utilities
import { actionTypes } from '../../utils/constants';
import { deleteFromCartAction } from '../../actions/cart';
import { makeMockStore } from '../../utils/testUtils';
import data from '../../data/data.json';

describe('delete from cart redux action', () => {
  it('registers correctly to the store', async () => {
    // Arrange

    // test data
    const Product = data[0];

    // creating a mock store
    const store = makeMockStore();

    // Act
    store.dispatch(deleteFromCartAction(Product));
    const actions = store.getActions();

    // Assert
    expect(actions[0]).toEqual({
      payload: Product,
      type: actionTypes.deleteFromCartAction,
    });
  });
});
