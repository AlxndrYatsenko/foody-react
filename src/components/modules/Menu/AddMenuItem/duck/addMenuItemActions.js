import types from './addMenuItemActionTypes';

const addMenuItemSuccess = newItem => ({
  type: types.ADD_SUCCESS,
  payload: newItem,
});

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

export default {
  addMenuItemSuccess,
  fetchRequest,
  fetchError,
};
