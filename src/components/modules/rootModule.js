import { combineReducers } from 'redux';
import menuReducer from './Menu/duck/menuReducer';
import addMenuItemReducer from './AddMenuItem/duck/addMenuItemReducer';

export default combineReducers({
  menu: menuReducer,
  addMenuItem: addMenuItemReducer,
  // menuSelect: menuSelectReducer,
  // menuFilter: menuFilterReducer,
});
