import { combineReducers } from 'redux';

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
  items: itemsReducer,
  cart: cartReducer,
  entities: entityReducer,
  categories: categoriesReducer,
  filter: filterReducer,
  currentItem: menuItemReducer,
  loading: loadingReducer,
  error: errorReducer,
});
