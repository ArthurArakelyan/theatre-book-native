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

  async bookTheatre(theatreId: string) {
    try {
      const user = await super.getUser();

      const response = await request('POST', 'bookings/create', {
        theatreId,
        userEmail: 'test@mail.loc',
        userName: user.name,
      });

      super.checkIsSuccess(response);
      return response?.data?.data?.booking;
    } catch (e) {
      super.catchError(e);
    }
  }
}

export default new BookingsService();
