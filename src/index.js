import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/App';
import Spiner from './components/Spiner/Spiner';
import { store, persistor } from './store/store';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Spiner />} persistor={persistor}>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
