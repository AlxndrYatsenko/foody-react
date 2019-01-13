import queryString from 'query-string';
import types from './menuActionTypes';

const changeFilter = filter => ({
  type: types.CHANGE_FILTER,
  payload: filter,
});

const getCategoryfromLocation = ({ search }) => {
  const { category } = queryString.parse(search);
  // console.log(category);

  return {
    type: types.GET_CATEGORY,
    payload: category || '',
  };
};

const changeCategory = (category, history, location) => {
  history.push({
    pathname: location.pathname,
    search: `category=${category}`,
  });
  return {
    type: types.CHANGE_CATEGORY,
    payload: category,
  };
};

const resetCategory = history => {
  history.push({ pathname: '/menu' });
  return {
    type: types.RESET_CATEGORY,
    payload: '',
  };
};

const fetchRequest = () => ({
  type: types.MENU_FETCH_REQUEST,
});

const fetchSuccess = menuItems => ({
  type: types.MENU_FETCH_SUCCESS,
  payload: menuItems,
});

const deleteItemSuccess = id => ({
  type: types.DELETE_SUCCESS,
  payload: id,
});

const fetchError = error => ({
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
  getCategoryfromLocation,
  addMenuItemSuccess,
  deleteMenuItemSuccess,
  changeCategory,
  resetCategory,
  changeFilter,
  fetchRequest,
  fetchSuccess,
  deleteItemSuccess,
  fetchError,
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesError,
};
