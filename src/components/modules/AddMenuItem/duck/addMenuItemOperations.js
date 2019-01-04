import axios from 'axios';
// import queryString from 'query-string';
import actions from './addMenuItemActions';

axios.defaults.baseURL = 'http://localhost:3001';

const fetchAllIngredients = () => async dispatch => {
  dispatch(actions.fetchAllIngredientsRequest());

  try {
    const response = await axios.get(`/ingredients`);
    // console.log(response);
    dispatch(actions.fetchAllIngredientsSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchAllIngredientsError(error));
  }
};

const addCurrentIngredients = (ingredient, currentIngredients) => dispatch => {
  dispatch(actions.addMenuItemIngredient(ingredient));

  if (!currentIngredients.includes(ingredient))
    currentIngredients.push(ingredient);
};

export default {
  addCurrentIngredients,
  fetchAllIngredients,
};
