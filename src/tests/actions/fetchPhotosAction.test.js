// Libraries
import moxios from 'moxios';

// Utilities
import { actionTypes } from '../../utils/constants';
import { fetchPhotoAction } from '../../actions/cart';
import { makeMockStore } from '../../utils/testUtils';

describe('fetch photos Redux action', () => {
  beforeEach(() => {
    //this makes moxios the dominant request handler
    moxios.install();
  });

  afterEach(() => {
    // returning axios to its default HTTP state after each test case
    moxios.uninstall();
  });

  it('register correctly to the store', async () => {
    // Arrange

    // test data
    const Photo = {
      albumId: 1,
      id: 1,
      title: 'album',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    };

    // creating a mock store
    const store = makeMockStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        state: 200,
        response: Photo,
      });
    });

    // Act
    await store.dispatch(fetchPhotoAction());
    const actions = store.getActions();

    // Assert
    expect(actions[0]).toEqual({
      payload: Photo,
      type: actionTypes.fetchPhotoAction,
    });
  });
});
