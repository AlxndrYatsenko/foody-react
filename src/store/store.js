import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootModule from '../components/modules/rootModule';
import sessionReducer from '../components/modules/session/sessionReducer';
import { cartReducer } from '../components/modules/Cart/duck';

const rootPersistConfig = {
  key: 'root',
  storage,
  // whitelist: 'cart',
};
const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  session: persistReducer(sessionPersistConfig, sessionReducer),
  // cart: cartReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const enhancer = composeWithDevTools(applyMiddleware(thunk));

// export const store = createStore(persistedReducer, enhancer);
export const store = createStore(rootModule, enhancer);
export const persistor = persistStore(store);

export default store;
