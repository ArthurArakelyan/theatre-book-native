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

const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};

export const logout = () => async (dispatch) => {
  try {
    await storage.remove('user');
    dispatch(logoutAction());
    return true;
  } catch (e) {
    console.error(e);
  }
};
