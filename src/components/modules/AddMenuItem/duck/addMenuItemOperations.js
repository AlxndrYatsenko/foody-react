import axios from 'axios';

import actions from './addMenuItemActions';

axios.defaults.baseURL = 'http://localhost:3001';

const fetchAddMenuItem = () => async dispatch => {
  dispatch(actions.addNewMenuItem());
  console.log('submit');
  // try {
  //   const response = await axios.get(`/ingredients`);
  //   dispatch(actions.fetchAllIngredientsSuccess(response.data));
  // } catch (error) {
  //   dispatch(actions.fetchAllIngredientsError(error));
  // }
};

const fetchAllIngredients = () => async dispatch => {
  dispatch(actions.fetchAllIngredientsRequest());

  try {
    const response = await axios.get(`/ingredients`);
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

const addMenuItemGoBack = (history, location) => dispatch => {
  dispatch(actions.addMenuItemGoBack());

  console.log(history, location);

  // const { from } = location.state;
  const { pathname, search } = location ? location.state.from : '/menu';

  history.push({ pathname, search });
};

export default {
  fetchAddMenuItem,
  addCurrentIngredients,
  fetchAllIngredients,
  addMenuItemGoBack,
};
