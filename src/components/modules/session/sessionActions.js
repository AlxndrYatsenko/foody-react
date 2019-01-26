import * as actionTypes from './sessionActionsTypes';

export const authRequest = () => ({
  type: actionTypes.AUTH_REQUEST,
});

export const authSuccess = data => ({
  type: actionTypes.AUTH_SUCCESS,
  payload: data,
});

export const authError = error => ({
  type: actionTypes.AUTH_ERROR,
  payload: {
    error,
  },
});

// export const signInRequest = () => ({
//   type: actionTypes.SIGN_IN_REQUEST,
// });

// export const signInSuccess = data => ({
//   type: actionTypes.SIGN_IN_SUCCESS,
//   payload: data,
// });

// export const signInError = error => ({
//   type: actionTypes.SIGN_IN_ERROR,
//   payload: {
//     error,
//   },
// });

// export const authRequest = () => ({ type: types.AUTH_REQUEST });

// export const authSuccess = data => {
//   console.log('authSuccess: ', data);
//   return {
//     type: types.AUTH_SUCCESS,
//     pauload: data,
//   };
// };

// export const authError = error => ({
//   type: types.AUTH_ERROR,
//   pauload: { error },
// });
