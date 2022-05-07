import {CHANGE_CONNECTION} from "./actionTypes";

export const changeConnection = (connection: boolean) => {
  return {
    type: CHANGE_CONNECTION,
    payload: connection
  };
};
