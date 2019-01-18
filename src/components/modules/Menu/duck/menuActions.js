import queryString from 'query-string';
import { normalize } from 'normalizr';
import types from './menuActionTypes';
import itemsSchema from '../../../../services/schemas';

const changeFilter = filter => ({
  type: types.CHANGE_FILTER,
  payload: filter,
});

const getCategoryfromLocation = ({ search }) => {
  const { category } = queryString.parse(search);

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

const fetchSuccess = menuItems => {
  const normalazedItems = normalize(menuItems, [itemsSchema]);
  return {
    type: types.MENU_FETCH_SUCCESS,
    payload: {
      ids: {
        items: Object.keys(normalazedItems.entities.items),
        // comments: Object.keys(normalazedItems.entities.comments),
      },
      entities: normalazedItems.entities,
    },
  };
};

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

const selectItem = id => ({
  type: types.SELECT_ITEM,
  payload: id.toString(),
});

export default {
  selectItem,
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
