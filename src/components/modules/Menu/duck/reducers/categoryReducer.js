import types from '../menuActionTypes';

export default function categoryReducer(state = '', { type, payload }) {
  switch (type) {
    case types.GET_CATEGORY:
      return payload;

    case types.CHANGE_CATEGORY:
      return payload;

    case types.RESET_CATEGORY:
      return payload;

    default:
      return state;
  }
}
