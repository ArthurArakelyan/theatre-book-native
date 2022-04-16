import {LOGIN, LOGOUT} from "./actionTypes";

import storage from "../../utils/storage";

const loginAction = (user) => {
  return {
    type: LOGIN,
    payload: user
  };
};

export const login = () => async (dispatch) => {
  try {
    const user = await storage.get('user');
    dispatch(loginAction(user));
    return user;
  } catch (e) {
    console.error(e);
  }
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
