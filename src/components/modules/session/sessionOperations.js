import axios from 'axios';
import {
  authRequest,
  authSuccess,
  authError,
  signOutRequest,
  signOutSuccess,
} from './sessionActions';
import { getToken } from './sessionSelectors';

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

// export const signOut = () => (dispatch, getState) => {
//   dispatch(signOutRequest());

//   const token = getToken(getState());

//   const config = {
//     headers: {
//       Autherization: token,
//     },
//   };

//   axios.post('signout', {}, config).then(() => dispatch(signOutSuccess()));
// };

export const signOut = () => (dispatch, getState) => {
  dispatch(signOutRequest());

  const token = getToken(getState());

  const config = {
    headers: {
      Authorization: token,
    },
  };

  axios
    .post('/auth/signout', {}, config)
    .then(() => dispatch(signOutSuccess()));
};
