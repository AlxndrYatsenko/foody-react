import { combineReducers } from 'redux';

import types from './addMenuItemActionTypes';

// const itemsReducer = (state = {}, { type, payload }) => {
//   switch (type) {
//     case types.ADD_MENU_ITEM:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(item => item.id !== payload);

//     default:
//       return state;
//   }
// };

function addMenuItemNameReducer(state = '', { type, payload }) {
  switch (type) {
    case types.ADD_MENU_ITEM_NAME:
      return payload;

    default:
      return state;
  }
}

function addMenuItemPriceReducer(state = '', { type, payload }) {
  switch (type) {
    case types.ADD_MENU_ITEM_PRICE:
      return payload;

    default:
      return state;
  }
}

function addMenuItemImageReducer(state = '', { type, payload }) {
  switch (type) {
    case types.ADD_MENU_ITEM_IMAGE:
      return payload;

    default:
      return state;
  }
}

function addMenuItemDescriptionReducer(state = '', { type, payload }) {
  switch (type) {
    case types.ADD_MENU_ITEM_DESCRIPTION:
      return payload;

    default:
      return state;
  }
}

function addMenuItemCategoryReducer(state = '', { type, payload }) {
  switch (type) {
    case types.ADD_MENU_ITEM_CATEGORY:
      return payload;

    default:
      return state;
  }
}

function addMenuItemIngredientReducer(state = [], { type, payload }) {
  switch (type) {
    case types.ADD_MENU_ITEM_INGREDIENT:
      return payload;

    default:
      return state;
  }
}

function addMenuItemAllIngredientsReducer(state = [], { type, payload }) {
  switch (type) {
    case types.INGREDIENTS_FETCH_SUCCESS:
      return payload;

    // case types.ADD_SUCCESS:
    //   return [...state, payload];

    // case types.DELETE_SUCCESS:
    //   return state.filter(item => item.id !== payload);

    default:
      return state;
  }
}
// ADD_MENU_ITEM_FETCH_REQUEST;
// ;
// ADD_MENU_ITEM_FETCH_ERROR;

export default combineReducers({
  name: addMenuItemNameReducer,
  price: addMenuItemPriceReducer,
  image: addMenuItemImageReducer,
  decroption: addMenuItemDescriptionReducer,
  category: addMenuItemCategoryReducer,
  allIngredients: addMenuItemAllIngredientsReducer,
  ingredient: addMenuItemIngredientReducer,
});
