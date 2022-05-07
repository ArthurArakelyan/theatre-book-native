import {GET_MY_BOOKINGS} from "./actionTypes";

import storage from "../../utils/storage";
import createAsyncActionHelpers from "../../utils/createAsyncActionHelpers";

import bookingsService from "../../services/bookingsService";

const [startGetBookings, getBookingsSuccess, getBookingsError] = createAsyncActionHelpers(GET_MY_BOOKINGS);

export const getMyBookings = () => async (dispatch, getState) => {
  const isConnected = getState().connection;

  try {
    dispatch(startGetBookings());

    const bookings = isConnected
      ? await bookingsService.getMyBookings()
      : await storage.get('myBookings');

    dispatch(getBookingsSuccess('bookings', bookings));
    return bookings;
  } catch (e) {
    dispatch(getBookingsError());
  }
};
