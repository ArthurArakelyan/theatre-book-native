import Service from "./Service";

import request from "../utils/request";

class BookingsService extends Service {
  async getBookings() {
    try {
      const response = await request('GET', 'bookings/get');
      super.checkIsSuccess(response);
      return response?.data?.data?.bookings;
    } catch (e) {
      super.catchError(e);
    }
  }

  async getMyBookings() {
    try {
      const user = await super.getUser();

      const response = await request('GET', `bookings/get/${user.id}`);

      super.checkIsSuccess(response);

      return response?.data?.data?.bookings;
    } catch (e) {
      super.catchError(e);
    }
  }

  async deleteAllBookings() {
    try {
      const response = await request('DELETE', 'bookings/delete');
      super.checkIsSuccess(response);

      return true;
    } catch (e) {
      super.catchError(e);
    }
  }

  async bookTheatre(theatreId: string, email: string) {
    try {
      const user = await super.getUser();

      const response = await request('POST', 'bookings/create', {
        theatreId,
        userEmail: email,
        userName: user.name,
      });

      super.checkIsSuccess(response);
      return response?.data?.data?.booking;
    } catch (e) {
      super.catchError(e);
    }
  }

  async submitBooking(id: string) {
    try {
      const response = await request('POST', `bookings/submit/${id}`);
      super.checkIsSuccess(response);
      return response?.data?.data?.bookingId;
    } catch (e) {
      super.catchError(e);
    }
  }
}

export default new BookingsService();
