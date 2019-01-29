import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import sessionReducer from '../components/modules/session/sessionReducer';
import { cartReducer } from '../components/modules/Cart/duck';
import {
  filterReducer,
  entityReducer,
  itemsReducer,
  errorReducer,
  loadingReducer,
  categoriesReducer,
} from '../components/modules/Menu/duck/reducers';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: 'cart',
};
const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  session: persistReducer(sessionPersistConfig, sessionReducer),
  cart: cartReducer,
  filter: filterReducer,
  entities: entityReducer,
  items: itemsReducer,
  error: errorReducer,
  loading: loadingReducer,
  categories: categoriesReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const enhancer = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);

export default store;
