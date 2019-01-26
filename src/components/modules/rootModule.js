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
import menuItemReducer from './MenuItem/duck/menuItemReducer';

export default combineReducers({
  session: sessionReducer,
  items: itemsReducer,
  cart: cartReducer,
  entities: entityReducer,
  categories: categoriesReducer,
  filter: filterReducer,
  currentItem: menuItemReducer,
  loading: loadingReducer,
  error: errorReducer,
});
