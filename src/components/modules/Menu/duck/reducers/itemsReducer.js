import types from '../menuActionTypes';

export default function itemsReducer(state = [], { type, payload }) {
  switch (type) {
    case types.MENU_FETCH_SUCCESS:
      return payload.ids.items;

    default:
      return state;
  }
}
