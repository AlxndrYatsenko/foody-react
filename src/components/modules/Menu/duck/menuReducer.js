import { combineReducers } from 'redux';
import types from './menuActionTypes';
import menuItemReducer from '../MenuItem/duck/menuItemReducers';

function itemsReducer(state = [], { type, payload }) {
  switch (type) {
    case types.MENU_FETCH_SUCCESS:
      return payload;

    case types.ADD_SUCCESS:
      return [...state, payload];

    case types.DELETE_SUCCESS:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
}

function filterReducer(state = '', { type, payload }) {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
}

function loadingReducer(state = false, { type }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return true;

    case types.FETCH_SUCCESS:
    case types.FETCH_ERROR:
      return false;

    default:
      return state;
  }
}

function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return null;

    case types.FETCH_ERROR:
      return payload;

    default:
      return state;
  }
}

function categoriesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.CATEGORIES_FETCH_SUCCESS:
      return payload;

    default:
      return state;
  }
}

function categoryReducer(state = '', { type, payload }) {
  switch (type) {
    case types.GET_CATEGORY:
      return payload;

    case types.CHANGE_CATEGORY:
      return payload;

    case types.RESET_CATEGORY:
      return payload;

    default:
      return state;
  }
}

export default combineReducers({
  items: itemsReducer,
  category: categoryReducer,
  categories: categoriesReducer,
  loading: loadingReducer,
  error: errorReducer,
  filter: filterReducer,
  currentItem: menuItemReducer,
});
