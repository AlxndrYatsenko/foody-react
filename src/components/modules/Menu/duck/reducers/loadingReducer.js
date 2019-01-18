import types from '../menuActionTypes';

export default function loadingReducer(state = false, { type }) {
  switch (type) {
    case types.MENU_FETCH_REQUEST:
      return true;

    case types.MENU_FETCH_SUCCESS:
    case types.MENU_FETCH_ERROR:
      return false;

    default:
      return state;
  }
}
