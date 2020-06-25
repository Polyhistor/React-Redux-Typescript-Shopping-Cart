// Libraries
import React from 'react';
import thunk from 'redux-thunk';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';

// Components
import ShopContainer from '../components/shop/ShopContainer';
import Cart from '../components/cart/Cart';

// Utils
import { reducers } from '../reducers/index';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// configuring redux-persist
const config = {
  key: 'reducer',
  storage,
};

// persisting the root reducers of the application
const persisted = persistReducer(config, reducers);

// initializing the store, applying middleware [thunk]
const store = createStore(
  persisted,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

// persisting the store
const persistor = persistStore(store);

const App: React.FC = (): React.ReactElement => {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Route exact path="/" component={ShopContainer}></Route>
            <Route exact path="/cart" component={Cart}></Route>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
