import {GET_THEATRES, ADD_THEATRE} from "./actionTypes";

const initialState = {
  theatres: [],
  loading: false,
  error: false,
};

const theatresReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_THEATRES: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case ADD_THEATRE: {
      return {
        ...state,
        theatres: [...state.theatres, action.payload],
      }
    }
    default: {
      return state;
    }
  }
};

export default theatresReducer;
