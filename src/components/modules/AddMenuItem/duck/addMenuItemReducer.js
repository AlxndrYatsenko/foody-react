import { combineReducers } from 'redux';

import types from './addMenuItemActionTypes';

// function addMenuItemGoBackReducer(state = '', { type, payload }) {
//   switch (type) {
//     case types.ADD_MENU_ITEM_NAME:
//       return payload;

//     default:
//       return state;
//   }
// }

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

function addMenuItemIngredientReducer(state = '', { type, payload }) {
  switch (type) {
    case types.ADD_MENU_ITEM_INGREDIENT:
      return payload;

    default:
      return state;
  }
}

function addMenuItemCurrentIngredientReducer(state = [], { type, payload }) {
  switch (type) {
    case types.ADD_MENU_ITEM_CURRENT_INGREDIENTS:
      return payload;

    default:
      return state;
  }
}

function addMenuItemAllIngredientsReducer(state = [], { type, payload }) {
  switch (type) {
    case types.INGREDIENTS_FETCH_SUCCESS:
      return payload;

    default:
      return state;
  }
}

export default combineReducers({
  name: addMenuItemNameReducer,
  price: addMenuItemPriceReducer,
  image: addMenuItemImageReducer,
  category: addMenuItemCategoryReducer,
  decroption: addMenuItemDescriptionReducer,
  currentIngredients: addMenuItemCurrentIngredientReducer,
  allIngredients: addMenuItemAllIngredientsReducer,
  ingredient: addMenuItemIngredientReducer,
});
