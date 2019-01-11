import axios from 'axios';

import actions from './addMenuItemActions';

axios.defaults.baseURL = 'http://localhost:3001';

const addMenuItem = (e, goBack, obj) => async dispatch => {
  e.preventDefault();
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.post(`/menu`, obj);
    console.log(response.data);
    dispatch(actions.addMenuItemSuccess(response.data));
    goBack();
  } catch (error) {
    dispatch(actions.fetchError(console.log(error)));
  }
};
export default {
  addMenuItem,
};
