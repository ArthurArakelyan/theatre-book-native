import {LOGIN, LOGOUT, ADD_EMAIL} from "./actionTypes";

import storage from "../../utils/storage";

// login

const loginAction = (user) => {
  return {
    type: LOGIN,
    payload: user
  };
};

export const login = () => async (dispatch) => {
  try {
    const user = await storage.get('user');

    if (!user) {
      return;
    }

    dispatch(loginAction(user));
    return user;
  } catch (e) {
    console.error(e);
  }
};

// logout

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

// email

const addEmailAction = (email: string) => {
  return {
    type: ADD_EMAIL,
    payload: email
  };
};

export const addEmail = (email: string) => async (dispatch) => {
  try {
    const user = await storage.get('user');

    if (!user) {
      throw new Error('User cannot add email because user is not registered');
    }

    await storage.set('user', {
      ...user,
      email,
    });

    dispatch(addEmailAction(email));
  } catch (e) {
    console.error(e);
  }
};
