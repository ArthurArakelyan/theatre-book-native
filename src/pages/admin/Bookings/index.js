import React, {useEffect} from "react";
import {StyleSheet, ScrollView} from "react-native";
import {useDispatch, useSelector} from "react-redux";

import Booking from "./Booking";
import PageError from "../../../components/PageError";

import {getBookings} from "../../../store/bookings/actions";

const Bookings = () => {
  const dispatch = useDispatch();

  const {bookings, error} = useSelector((state) => state.bookings);

  useEffect(() => {
    dispatch(getBookings());
  }, []);

  if (error) {
    return <PageError handleClick={() => dispatch(getBookings())} />;
  }

  return (
    <ScrollView contentContainerStyle={styles.bookings}>
      {bookings.map((booking) => {
        return (
          <Booking key={booking._id} booking={booking} />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bookings: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default Bookings;
