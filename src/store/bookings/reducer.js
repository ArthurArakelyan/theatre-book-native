import {GET_BOOKINGS, ADD_BOOKING} from "./actionTypes";

const initialState = {
  bookings: [],
  loading: false,
  error: false,
};

const bookingsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_BOOKINGS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case ADD_BOOKING: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default bookingsReducer;
