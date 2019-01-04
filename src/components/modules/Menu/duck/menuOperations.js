import axios from 'axios';
import actions from './menuActions';

axios.defaults.baseURL = 'http://localhost:3001';

const fetchMenuItems = () => async dispatch => {
  dispatch(actions.fetchMenuRequest());

  try {
    const response = await axios.get(`/menu`);
    dispatch(actions.fetchMenuSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchMenuError(error));
  }
};

const fetchMenuItemsWithCategory = category => async dispatch => {
  dispatch(actions.fetchMenuRequest());

  try {
    const response = await axios.get(`/menu?category=${category}`);
    dispatch(actions.fetchMenuSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchMenuError(error));
  }
};

const addNote = text => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .post('/menu', { text, completed: false })
    .then(({ data }) => dispatch(actions.addNoteSuccess(data)))
    .catch(error => dispatch(actions.fetchError(error)));
};

const deleteNote = id => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .delete(`/menu/${id}`)
    .then(() => {
      dispatch(actions.deleteNoteSuccess(id));
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

const changeCategory = (category, history, location) => dispatch => {
  dispatch(actions.changeMenuCategory(category));
  return history.push({
    pathname: location.pathname,
    search: `category=${category}`,
  });
};

export default {
  fetchMenuItems,
  fetchMenuItemsWithCategory,
  fetchCategories,
  addNote,
  deleteNote,
  changeCategory,
};
