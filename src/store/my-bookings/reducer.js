import {GET_MY_BOOKINGS} from "./actionTypes";

const initialState = {
  bookings: [],
  loading: false,
  error: false,
};

const myBookingsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_MY_BOOKINGS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default myBookingsReducer;
