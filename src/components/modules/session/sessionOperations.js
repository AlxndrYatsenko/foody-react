import axios from 'axios';
import { authRequest, authSuccess, authError } from './sessionActions';

axios.defaults.baseURL = 'http://localhost:4040';

export const signUp = credentials => dispatch => {
  dispatch(authRequest());

  axios
    .post('/auth/signup', credentials)
    .then(({ data }) => dispatch(authSuccess(data)))
    .catch(error => dispatch(authError(error)));
};

export const signIn = credentials => dispatch => {
  dispatch(authRequest());

  axios
    .post('/auth/signin', credentials)
    .then(({ data }) => dispatch(authSuccess(data)))
    .catch(error => dispatch(authError(error)));
};
