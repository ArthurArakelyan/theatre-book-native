import {memo, useEffect} from "react";
import {useSelector} from "react-redux";

import storage from "../../utils/storage";

const SyncStoreWithStorage = () => {
  const {theatres} = useSelector((state) => state.theatres);
  const {bookings} = useSelector((state) => state.bookings);
  const {bookings: myBookings} = useSelector((state) => state.myBookings);

  useEffect(() => {
    try {
      storage.set('theatres', theatres);
    } catch (e) {}
  }, [theatres]);

  useEffect(() => {
    try {
      storage.set('bookings', bookings);
    } catch (e) {}
  }, [bookings]);

  useEffect(() => {
    try {
      storage.set('myBookings', myBookings);
    } catch (e) {}
  }, [myBookings]);

  return null;
};

export default memo(SyncStoreWithStorage);
