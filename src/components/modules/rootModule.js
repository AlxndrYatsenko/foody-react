import { combineReducers } from 'redux';
import menuReducer from './Menu/menuReducer';
// import addMenuItemReducer from './AddMenuItem/addMenuItemReducer';

export default combineReducers({
  menu: menuReducer,
  // addMenuItem: addMenuItemReducer,
  // menuSelect: menuSelectReducer,
  // menuFilter: menuFilterReducer,
});
