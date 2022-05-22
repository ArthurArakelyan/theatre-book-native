import {GET_THEATRES, ADD_THEATRE, DELETE_THEATRE} from "./actionTypes";

export const initialState = {
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
        theatres: [action.payload, ...state.theatres],
      };
    }
    case DELETE_THEATRE: {
      return {
        ...state,
        theatres: state.theatres.filter((theatre) => theatre._id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};

export default theatresReducer;
