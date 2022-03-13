import { USER_LOGIN, USER_LOGOUT } from './userTypes';
import Cookies from 'js-cookie';

const token = Cookies.get('token');

const initialState = {
  connected: token ? true : false,
  token: token,
};

const isConnectedReducer = (state = initialState, action) => {
  switch(action.type) {
    case USER_LOGIN:
      return {
        connected: true,
        token: Cookies.get('token')
      };
    case USER_LOGOUT:
      return {
        connected: false,
        token: null
      };
    default:
      return state;
  }
}

export default isConnectedReducer;