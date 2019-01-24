import types from '../menuActionTypes';

export default function categoriesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.CATEGORIES_FETCH_SUCCESS:
      return payload;

    default:
      return state;
  }
}
