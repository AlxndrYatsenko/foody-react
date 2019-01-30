import types from '../menuActionTypes';

export default function entityReducer(state = {}, { type, payload }) {
  switch (type) {
    case types.MENU_FETCH_SUCCESS:
      return payload.entities;

    default:
      return state;
  }
}
