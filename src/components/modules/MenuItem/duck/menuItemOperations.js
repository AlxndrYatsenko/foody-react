import axios from 'axios';
import { menuItemActions } from '.';

axios.defaults.baseURL = 'http://localhost:3001';

const fetchMenuItem = id => async dispatch => {
  dispatch(menuItemActions.fetchRequest());

  try {
    const response = await axios.get(`/menu/${id}`);
    dispatch(menuItemActions.fetchMenuItemSuccess(response.data));
  } catch (error) {
    dispatch(menuItemActions.fetchMenuItemError(error));
  }
};

export default { fetchMenuItem };
