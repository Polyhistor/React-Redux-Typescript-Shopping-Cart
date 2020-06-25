// Libraries
import thunk from 'redux-thunk';
import Enzyme, { shallow, render, mount } from 'enzyme';

// Utilities
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import createRouterContext from 'react-router-test-context';

const mockStore = configureStore([thunk]);

/**
 * a mock store with initial value
 * @function
 * @param state
 * @return {function}
 */

export const makeMockStore = (state = {}) => {
  return mockStore({
    ...state,
  });
};

/**
 * Static contextTypes property
 * @function
 */
export const context = createRouterContext();

// React 16 Enzyme adapter setup
Enzyme.configure({ adapter: new Adapter() });
export { shallow, mount, render };
export default Enzyme;
