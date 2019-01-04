import types from './menuActionTypes';

const changeFilter = filter => ({
  type: types.CHANGE_FILTER,
  payload: filter,
});

const changeMenuCategory = category => ({
  type: types.CHANGE_CATEGORY,
  payload: category,
});

const resetMenuCategory = () => ({
  type: types.RESET_CATEGORY,
  payload: '',
});

const fetchMenuRequest = () => ({
  type: types.MENU_FETCH_REQUEST,
});

const fetchMenuSuccess = menuItems => ({
  type: types.MENU_FETCH_SUCCESS,
  payload: menuItems,
});

const fetchMenuError = error => ({
  type: types.MENU_FETCH_ERROR,
  payload: error,
});

const fetchCategoriesRequest = () => ({
  type: types.CATEGORIES_FETCH_REQUEST,
});

const fetchCategoriesSuccess = menuItems => ({
  type: types.CATEGORIES_FETCH_SUCCESS,
  payload: menuItems,
});

const fetchCategoriesError = error => ({
  type: types.CATEGORIES_FETCH_ERROR,
  payload: error,
});

const addMenuItemSuccess = note => ({
  type: types.ADD_SUCCESS,
  payload: note,
});

const deleteMenuItemSuccess = id => ({
  type: types.DELETE_SUCCESS,
  payload: id,
});

export default {
  addMenuItemSuccess,
  deleteMenuItemSuccess,
  changeMenuCategory,
  resetMenuCategory,
  changeFilter,
  fetchMenuRequest,
  fetchMenuSuccess,
  fetchMenuError,
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesError,
};
