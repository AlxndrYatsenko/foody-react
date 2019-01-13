import actions from './menuItemActionsTypes';
// import { type } from 'os';

const fetchRequest = () => ({
  type: actions.FETCH_REQUEST,
});

const fetchMenuItemSuccess = menuItem => ({
  type: actions.FETCH_SUCCESS,
  payload: menuItem,
});

const fetchMenuItemError = error => ({
  type: actions.FETCH_ERROR,
  payload: error,
});

export default {
  fetchRequest,
  fetchMenuItemSuccess,
  fetchMenuItemError,
};
