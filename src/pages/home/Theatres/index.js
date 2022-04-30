import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {ScrollView, StyleSheet} from "react-native";

import Theatre from "../Theatre";
import BookingModal from "./BookingModal";
import PageLoading from "../../../components/PageLoading";
import PageError from "../../../components/PageError";

import useModal from "../../../hooks/useModal";

import {getTheatres} from "../../../store/theatres/actions";

const Theatres = () => {
  const dispatch = useDispatch();

  const {theatres, loading, error} = useSelector((state) => state.theatres);

  const [isModalOpen, toggleModal] = useModal();

  const [booking, setBooking] = useState(null);

  useEffect(() => {
    dispatch(getTheatres());
  }, []);

  if (loading && !theatres.length) {
    return <PageLoading />;
  }

  if (error) {
    return <PageError handleClick={() => dispatch(getTheatres())} />;
  }

  const handleBook = (theatre) => {
    setBooking(theatre);
    toggleModal();
  };

  return (
    <ScrollView contentContainerStyle={styles.theatres}>
      {theatres?.map((theatre) => {
        return (
          <Theatre key={theatre._id} theatre={theatre} handleBook={handleBook} />
        );
      })}
      <BookingModal
        visible={isModalOpen}
        toggle={toggleModal}
        theatre={booking}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  theatres: {
    paddingHorizontal: 20,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '60%',
  },
  error_message: {
    fontSize: 32,
    color: '#ff0000',
  },
  error_message_button: {
    marginTop: 10,
    fontSize: 26,
    backgroundColor: '#6200EE',
    color: '#ffffff',
    padding: 10,
    borderRadius: 3,
  },
});

export default Theatres;
