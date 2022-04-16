import {GET_BOOKINGS, ADD_BOOKING} from "./actionTypes";

import createAsyncActionHelpers from "../../utils/createAsyncActionHelpers";

// get

const [startGetBookings, getBookingsSuccess, getBookingsError] = createAsyncActionHelpers(GET_BOOKINGS);

export const getBookings = () => async (dispatch) => {
  try {
    dispatch(startGetBookings());


  } catch (e) {
    dispatch(getBookingsError());
    console.error(e);
  }
};

// add

export const addBooking = () => async (dispatch) => {
  try {

  } catch (e) {
    console.error(e);
  }
};
