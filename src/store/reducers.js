import theatresReducer from "./theatres/reducer";
import userReducer from "./user/reducer";
import bookingsReducer from "./bookings/reducer";
import adminReducer from "./admin/reducer";
import myBookingsReducer from "./my-bookings/reducer";

const reducers = {
  theatres: theatresReducer,
  user: userReducer,
  bookings: bookingsReducer,
  myBookings: myBookingsReducer,
  isAdmin: adminReducer,
};

export default reducers;
