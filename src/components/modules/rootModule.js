import { combineReducers } from 'redux';
import menuReducer from './Menu/duck/menuReducer';

export default combineReducers({
  menu: menuReducer,
});
