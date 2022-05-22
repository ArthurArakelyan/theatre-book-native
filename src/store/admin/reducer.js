import {CHANGE_IS_ADMIN} from "./actionTypes";

const initialState = false;

const adminReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_IS_ADMIN: {
      return !!action.payload;
    }
    default: {
      return state;
    }
  }
};

export default adminReducer;
