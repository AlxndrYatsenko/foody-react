import axios from 'axios';

import actions from './addMenuItemActions';

axios.defaults.baseURL = 'http://localhost:3001';

const addMenuItem = (e, goBack, obj) => async dispatch => {
  e.preventDefault();
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.post(`/menu`, obj);
    dispatch(actions.addMenuItemSuccess(response.data));
    goBack();
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};
export default {
  addMenuItem,
};
