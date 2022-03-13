import { USER_ERROR, USER_LOGIN, USER_LOGOUT } from './userTypes';

export const userLogin = () => {
  return {
    type: USER_LOGIN
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT
  };
};

export const userError = (error) => {
  return {
    type: USER_ERROR,
    error
  }
}