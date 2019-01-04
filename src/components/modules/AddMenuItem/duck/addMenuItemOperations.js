import axios from 'axios';
// import queryString from 'query-string';
import actions from './addMenuItemActions';

axios.defaults.baseURL = 'http://localhost:3001';

// const fetchAddMenuItem = newItem => async dispatch => {
//   dispatch(actions.fetchAddMenuItemRequest(newItem));
//   try {
//     const response = await axios.post('/menu');
//     dispatch(actions.fetchAddMenuItemSuccess(response.data));
//   } catch (error) {
//     dispatch(actions.fetchAddMenuItemError(error));
//   }
// };

// const fetchMenuItems = () => async dispatch => {
//   dispatch(actions.fetchMenuRequest());

//   try {
//     const response = await axios.get(`/menu`);
//     dispatch(actions.fetchMenuSuccess(response.data));
//   } catch (error) {
//     dispatch(actions.fetchMenuError(error));
//   }
// };

// const fetchMenuItemsWithCategory = category => async dispatch => {
//   dispatch(actions.fetchMenuRequest());

//   try {
//     const response = await axios.get(`/menu?category=${category}`);
//     dispatch(actions.fetchMenuSuccess(response.data));
//   } catch (error) {
//     dispatch(actions.fetchMenuError(error));
//   }
// };

// const addNote = text => dispatch => {
//   dispatch(actions.fetchRequest());

//   axios
//     .post('/menu', { text, completed: false })
//     .then(({ data }) => dispatch(actions.addNoteSuccess(data)))
//     .catch(error => dispatch(actions.fetchError(error)));
// };

// const deleteNote = id => dispatch => {
//   dispatch(actions.fetchRequest());

//   axios
//     .delete(`/menu/${id}`)
//     .then(() => {
//       dispatch(actions.deleteNoteSuccess(id));
//     })
//     .catch(error => {
//       dispatch(actions.fetchError(error));
//     });
// };

const fetchAllIngredients = () => async dispatch => {
  dispatch(actions.fetchAllIngredientsRequest());

  try {
    const response = await axios.get(`/ingredients`);
    console.log(response);
    dispatch(actions.fetchAllIngredientsSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchAllIngredientsError(error));
  }
};

// const changeCategory = (category, history, location) => dispatch => {
//   dispatch(actions.changeMenuCategory(category));
//   return history.push({
//     pathname: location.pathname,
//     search: `category=${category}`,
//   });
// };

export default {
  // fetchAddMenuItem,
  fetchAllIngredients,
  // fetchMenuItems,
  // fetchMenuItemsWithCategory,
  // fetchCategories,
  // addNote,
  // deleteNote,
  // changeCategory,
};
