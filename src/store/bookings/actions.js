import {GET_BOOKINGS, SUBMIT_BOOKING} from "./actionTypes";

import bookingsService from "../../services/bookingsService";

import storage from "../../utils/storage";
import createAsyncActionHelpers from "../../utils/createAsyncActionHelpers";

// get

const [startGetBookings, getBookingsSuccess, getBookingsError] = createAsyncActionHelpers(GET_BOOKINGS);

export const getBookings = () => async (dispatch, getState) => {
  const isConnected = getState().connection;

  try {
    dispatch(startGetBookings());

    const bookings = isConnected
      ? await bookingsService.getBookings()
      : await storage.get('bookings');

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
