// import combineReducers from 'react-redux';

import types from './menuItemActionsTypes';

function menuItemReducer(state = {}, { type, payload }) {
  switch (type) {
    case types.SELECT_ITEM:
      return payload;

    default:
      return state;
  }
}

export default menuItemReducer;
