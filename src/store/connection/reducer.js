import {CHANGE_CONNECTION} from "./actionTypes";

const connectionReducer = (state = true, action = {}) => {
  switch (action.type) {
    case CHANGE_CONNECTION: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default connectionReducer;
