// Utilities
import { addToCartReducer } from '../../reducers/cart';
import { actionTypes } from '../../utils/constants';

describe('photos reducer', () => {
  it('should return the initial statee', () => {
    expect(addToCartReducer(undefined, {})).toEqual({
      addedItems: [],
      total: 0,
    });
  });

  it('should handle fetch albums', () => {
    expect(
      addToCartReducer([], {
        type: actionTypes.fetchPhotoAction,
        payload: {
          albumId: 1,
          id: 1,
          title: 'photo',
          url: 'https://via.placeholder.com/600/24f355',
          thumbnailUrl: 'https://via.placeholder.com/150/24f355',
        },
      })
    ).toEqual({
      photo: {
        albumId: 1,
        id: 1,
        title: 'photo',
        url: 'https://via.placeholder.com/600/24f355',
        thumbnailUrl: 'https://via.placeholder.com/150/24f355',
      },
    });
  });
});
