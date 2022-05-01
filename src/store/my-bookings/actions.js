import {GET_MY_BOOKINGS} from "./actionTypes";

import createAsyncActionHelpers from "../../utils/createAsyncActionHelpers";

import bookingsService from "../../services/bookingsService";

const [startGetBookings, getBookingsSuccess, getBookingsError] = createAsyncActionHelpers(GET_MY_BOOKINGS);

export const getMyBookings = () => async (dispatch) => {
  try {
    dispatch(startGetBookings());

    const bookings = await bookingsService.getMyBookings();

    dispatch(getBookingsSuccess('bookings', bookings));
    return bookings;
  } catch (e) {
    dispatch(getBookingsError());
  }
};
