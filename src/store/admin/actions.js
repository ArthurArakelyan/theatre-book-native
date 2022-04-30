import {CHANGE_IS_ADMIN} from "./actionTypes";

import storage from "../../utils/storage";

const changeIsAdminAction = (is: boolean) => {
  return {
    type: CHANGE_IS_ADMIN,
    payload: is
  };
};

export const checkIsAdmin = () => async (dispatch) => {
  try {
    const isAdmin = !!await storage.get('is_admin');
    dispatch(changeIsAdminAction(isAdmin));
    return isAdmin;
  } catch (e) {
    console.error(e);
  }
};

export const setIsAdmin = () => async (dispatch) => {
  try {
    await storage.set('is_admin', true);
    dispatch(changeIsAdminAction(true));
    return true;
  } catch (e) {
    console.error(e);
  }
};
