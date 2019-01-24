import types from './menuItemActionsTypes';

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchMenuItemSuccess = menuItem => ({
  type: types.FETCH_SUCCESS,
  payload: menuItem,
});

const fetchMenuItemError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

const selectItem = id => ({
  type: types.SELECT_ITEM,
  payload: id,
});
export default {
  selectItem,
  fetchRequest,
  fetchMenuItemSuccess,
  fetchMenuItemError,
};
