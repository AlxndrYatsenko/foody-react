import types from '../menuActionTypes';

export default function filterReducer(state = '', { type, payload }) {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
}
