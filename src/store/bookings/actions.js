import {GET_BOOKINGS, ADD_BOOKING, SUBMIT_BOOKING} from "./actionTypes";

import bookingsService from "../../services/bookingsService";

import createAsyncActionHelpers from "../../utils/createAsyncActionHelpers";

// get

const [startGetBookings, getBookingsSuccess, getBookingsError] = createAsyncActionHelpers(GET_BOOKINGS);

export const getBookings = () => async (dispatch) => {
  try {
    dispatch(startGetBookings());

    const bookings = await bookingsService.getBookings();

    dispatch(getBookingsSuccess('bookings', bookings));
    return bookings;
  } catch (e) {
    dispatch(getBookingsError());
  }
};

// submit

const submitBookingAction = (id: string) => {
  return {
    type: SUBMIT_BOOKING,
    payload: id
  };
};

export const submitBooking = (id: string) => async (dispatch) => {
  try {
    const booking = await bookingsService.submitBooking(id);
    dispatch(submitBookingAction(id));
    return booking;
  } catch (e) {
    console.error(e);
  }
};
