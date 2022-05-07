import {memo, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useNetInfo} from "@react-native-community/netinfo";

import storage from "../../utils/storage";

import {changeConnection} from "../../store/connection/actions";

const SyncStoreWithStorage = () => {
  const dispatch = useDispatch();
  const {isConnected} = useNetInfo();

  const {theatres} = useSelector((state) => state.theatres);
  const {bookings} = useSelector((state) => state.bookings);
  const {bookings: myBookings} = useSelector((state) => state.myBookings);

  useEffect(() => {
    if (isConnected === null) {
      return;
    }

    dispatch(changeConnection(isConnected));
  }, [isConnected]);

  useEffect(() => {
    if (!theatres.length) return;

    try {
      storage.set('theatres', theatres);
    } catch (e) {}
  }, [theatres]);

  useEffect(() => {
    if (!bookings.length) return;

    try {
      storage.set('bookings', bookings);
    } catch (e) {}
  }, [bookings]);

  useEffect(() => {
    if (!myBookings.length) return;

    try {
      storage.set('myBookings', myBookings);
    } catch (e) {}
  }, [myBookings]);

  return null;
};

export default memo(SyncStoreWithStorage);
