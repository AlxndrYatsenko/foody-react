import types from './addMenuItemActionTypes';

const addNewMenuItem = newItem => ({
  type: types.ADD_MENU_ITEM,
  payload: newItem,
});

const addMenuItemName = name => ({
  type: types.ADD_MENU_ITEM_NAME,
  payload: name,
});

const addMenuItemPrice = price => ({
  type: types.ADD_MENU_ITEM_PRICE,
  payload: price,
});

const addMenuItemImage = src => ({
  type: types.ADD_MENU_ITEM_IMAGE,
  payload: src,
});

const addMenuItemDescription = description => ({
  type: types.ADD_MENU_ITEM_DESCRIPTION,
  payload: description,
});

const addMenuItemCategory = category => ({
  type: types.ADD_MENU_ITEM_CATEGORY,
  payload: category,
});

const addMenuItemIngredient = ingredient => ({
  type: types.ADD_MENU_ITEM_INGREDIENT,
  payload: ingredient,
});

const addMenuItemCurrentIngredients = ingredient => ({
  type: types.ADD_MENU_ITEM_CURRENT_INGREDIENTS,
  payload: ingredient,
});

//++++++++++++++++++++++++++++
// edit without operations
//++++++++++++++++++++++++++++

const addMenuItemGoBack = () => ({
  type: types.ADD_MENU_ITEM_GO_BACK,
});

const fetchAddMenuItemRequest = () => ({
  type: types.MENU_FETCH_REQUEST,
});

const fetchAddMenuItemSuccess = menuItem => ({
  type: types.MENU_FETCH_SUCCESS,
  payload: menuItem,
});

const fetchAddMenuItemError = error => ({
  type: types.MENU_FETCH_ERROR,
  payload: error,
});

const fetchAllIngredientsRequest = () => ({
  type: types.INGREDIENTS_FETCH_REQUEST,
});

const fetchAllIngredientsSuccess = menuItem => ({
  type: types.INGREDIENTS_FETCH_SUCCESS,
  payload: menuItem,
});

const fetchAllIngredientsError = error => ({
  type: types.INGREDIENTS_FETCH_ERROR,
  payload: error,
});

export default {
  addMenuItemGoBack,
  addMenuItemIngredient,
  addMenuItemCurrentIngredients,
  addMenuItemName,
  addMenuItemPrice,
  addMenuItemDescription,
  addMenuItemCategory,
  addMenuItemImage,
  addNewMenuItem,
  fetchAddMenuItemRequest,
  fetchAddMenuItemSuccess,
  fetchAddMenuItemError,
  fetchAllIngredientsRequest,
  fetchAllIngredientsSuccess,
  fetchAllIngredientsError,
};
