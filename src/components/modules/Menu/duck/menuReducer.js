import { combineReducers } from 'redux';
import types from './menuActionTypes';
import { menuItemReducers } from '../../MenuItem/duck';

// function itemsReducer(state = [], { type, payload }) {
//   switch (type) {
//     case types.MENU_FETCH_SUCCESS:
//       return payload;

//     case types.ADD_SUCCESS:
//       return [...state, payload];

//     case types.DELETE_SUCCESS:
//       return state.filter(item => item.id !== payload);

//     default:
//       return state;
//   }
// }

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

function entityReducer(state = {}, { type, payload }) {
  switch (type) {
    case types.MENU_FETCH_SUCCESS:
      // console.log(payload);
      return payload.entities;

    // case types.ADD_SUCCESS:
    //   return [...state, payload];

    // case types.DELETE_SUCCESS:
    //   return state.filter(item => item.id !== payload);

    default:
      return state;
  }
}

function itemsReducer(state = [], { type, payload }) {
  switch (type) {
    case types.MENU_FETCH_SUCCESS:
      // console.log(payload.ids.items);
      return payload.ids.items;
    default:
      return state;
  }
}

function commentsReducer(state = [], { type, payload }) {
  switch (type) {
    case types.MENU_FETCH_SUCCESS:
      // console.log(payload.ids.comments);
      return payload.ids.comments;
    // ;
    default:
      return state;
  }
}

// function selectedItemReducer(state = null, { type, payload }) {
//   switch (type) {
//     case types.SELECT_ITEM:
//       return payload;

//     default:
//       return state;
//   }
// }

export default combineReducers({
  currentItem: menuItemReducers,
  items: itemsReducer,
  comments: commentsReducer,
  entities: entityReducer,
  category: categoryReducer,
  categories: categoriesReducer,
  loading: loadingReducer,
  error: errorReducer,
  filter: filterReducer,
});
