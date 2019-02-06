import { normalize } from 'normalizr';
import types from './menuActionTypes';
import itemsSchema from '../../../../services/schemas';

const changeFilter = filter => ({
  type: types.CHANGE_FILTER,
  payload: filter,
});

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
      },
      entities: normalazedItems.entities,
    },
  };
};

const fetchError = error => ({
  type: types.MENU_FETCH_ERROR,
  payload: error,
});

const fetchCategoriesRequest = () => ({
  type: types.CATEGORIES_FETCH_REQUEST,
});

const fetchCategoriesSuccess = categories => ({
  type: types.CATEGORIES_FETCH_SUCCESS,
  payload: categories,
});

const fetchCategoriesError = error => ({
  type: types.CATEGORIES_FETCH_ERROR,
  payload: error,
});

export default {
  changeFilter,
  fetchRequest,
  fetchSuccess,
  fetchError,
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesError,
};
