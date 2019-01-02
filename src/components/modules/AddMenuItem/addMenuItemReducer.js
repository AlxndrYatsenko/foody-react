// import { combineReducers } from 'redux';
import types from './addMenuItemActionTypes';

// const addMenuItem = {
//   name,
//   price,
//   image,
//   description,
//   ingredients,
//   category,
// };

function itemsReducer(state = {}, { type, payload }) {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
}

// function filterReducer(state = '', { type, payload }) {
// 	switch (type) {
// 		case types.CHANGE_FILTER:
// 			return payload;

// 		default:
// 			return state;
// 	}
// }

// export default combineReducers({
//   items: itemsReducer,
//   // filter: filterReducer,
// });

export default itemsReducer;
