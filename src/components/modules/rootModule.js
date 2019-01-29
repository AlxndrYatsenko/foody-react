import { combineReducers } from 'redux';

import sessionReducer from './session/sessionReducer';

import {
  filterReducer,
  entityReducer,
  itemsReducer,
  errorReducer,
  loadingReducer,
  categoriesReducer,
} from './Menu/duck/reducers';

import cartReducer from './Cart/duck/cartReducer';

export default combineReducers({
  session: sessionReducer,
  items: itemsReducer,
  cart: cartReducer,
  entities: entityReducer,
  categories: categoriesReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});
