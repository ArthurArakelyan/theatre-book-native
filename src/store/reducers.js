import theatresReducer from "./theatres/reducer";
import userReducer from "./user/reducer";
import bookingsReducer from "./bookings/reducer";
import adminReducer from "./admin/reducer";

const reducers = {
  theatres: theatresReducer,
  user: userReducer,
  bookings: bookingsReducer,
  isAdmin: adminReducer,
};

export default reducers;
