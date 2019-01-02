import axios from 'axios';
import actions from './menuActions';

const fetchMenuItems = () => async dispatch => {
  dispatch(actions.fetchMenuRequest());

  try {
    const response = await axios.get(`http://localhost:3001/menu`);
    dispatch(actions.fetchMenuSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchMenuError(error));
  }
};

const fetchMenuItemsByCategory = category => async dispatch => {
  dispatch(actions.fetchMenuRequest());

  try {
    console.log(category);
    const response = category
      ? await axios.get(`http://localhost:3001/menu?category=${category}`)
      : await axios.get(`http://localhost:3001/menu`);
    console.log(response);
    dispatch(actions.fetchMenuSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchMenuError(error));
  }
};

const addNote = text => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .post('http://localhost:3001/menu', { text, completed: false })
    .then(({ data }) => dispatch(actions.addNoteSuccess(data)))
    .catch(error => dispatch(actions.fetchError(error)));
};

const deleteNote = id => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .delete(`http://localhost:3001/menu/${id}`)
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
    const response = await axios.get(`http://localhost:3001/categories`);
    dispatch(actions.fetchCategoriesSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchCategoriesError(error));
  }
};

const categoryChange = (value, history, location) => {
  // const { history, location } = this.props;
  history.push({
    pathname: location.pathname,
    search: `category=${value}`,
  });
  actions.changeCategory();
};

export default {
  fetchMenuItemsByCategory,
  fetchMenuItems,
  fetchCategories,
  addNote,
  deleteNote,
  categoryChange,
};
