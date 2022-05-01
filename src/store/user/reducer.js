import {LOGIN, LOGOUT, ADD_EMAIL} from "./actionTypes";

const initialState = null;

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN: {
      return action.payload;
    }
    case LOGOUT: {
      return null;
    }
    case ADD_EMAIL: {
      return {
        ...state,
        email: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
