import {GET_BOOKINGS, ADD_BOOKING, SUBMIT_BOOKING} from "./actionTypes";

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
    case SUBMIT_BOOKING: {
      return {
        ...state,
        bookings: state.bookings.map((booking) =>
          booking._id === action.payload ? {...booking, isSubmitted: true} : booking
        ),
      };
    }
    default: {
      return state;
    }
  }
};

export default bookingsReducer;
