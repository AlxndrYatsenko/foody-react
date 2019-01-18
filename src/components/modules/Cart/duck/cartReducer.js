import { combineReducers } from 'redux';

import types from './cartActionsTypes';

function ids(state = [], { type, payload }) {
  switch (type) {
    case types.ADD_TO_CART:
      return state.includes(payload.id) ? state : [...state, payload.id];
    default:
      return state;
  }
}

function amount(state = {}, { type, payload }) {
  switch (type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        [payload.id]: state[payload.id] ? state[payload.id] + 1 : 1,
      };
    default:
      return state;
  }
}

export default combineReducers({
  ids,
  amount,
});
