import axios from 'axios';

import actions from './menuActions';

axios.defaults.baseURL = 'http://localhost:3001';

const fetchMenuItems = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get(`/menu`);
    dispatch(actions.fetchSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const fetchMenuItemsWithCategory = category => async dispatch => {
  dispatch(actions.fetchRequest());
  try {
    const response = category
      ? await axios.get(`/menu?category=${category}`)
      : await axios.get(`/menu`);
    dispatch(actions.fetchSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const deleteMenuItem = id => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .delete(`/menu/${id}`)
    .then(() => {
      dispatch(actions.deleteItemSuccess(id));
    })
    .catch(error => {
      dispatch(actions.fetchError(error));
    });
};

const fetchCategories = () => async dispatch => {
  dispatch(actions.fetchCategoriesRequest());

  try {
    const response = await axios.get(`/categories`);
    dispatch(actions.fetchCategoriesSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchCategoriesError(error));
  }
};

export default {
  fetchMenuItems,
  fetchMenuItemsWithCategory,
  fetchCategories,
  deleteMenuItem,
};
