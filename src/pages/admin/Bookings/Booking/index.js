import React, {useState} from "react";
import {View, StyleSheet, Text, Image} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {TouchableRipple} from "react-native-paper";
import Icon from "react-native-vector-icons/SimpleLineIcons";

import {submitBooking} from "../../../../store/bookings/actions";

import {purple, purpleDisabled} from "../../../../assets/colors";

const Booking = ({booking}) => {
  const dispatch = useDispatch();
  const isConnected = useSelector((state) => state.connection);

  const [loading, setLoading] = useState(false);

  if (!booking.bookedTheatre) {
    return null;
  }

  const handleSubmit = () => {
    if (loading) {
      return;
    }

    setLoading(true);
    dispatch(submitBooking(booking._id)).finally(() => setLoading(false));
  };

  return (
    <View style={styles.booking}>
      <Text style={styles.booking_field}>Booker name: {booking.userName}</Text>
      <Text style={styles.booking_field}>Booker email: {booking.userEmail}</Text>
      <Text style={styles.booking_theatre_title}>Booked Theatre</Text>
      <View style={styles.booking_theatre}>
        <Image style={styles.booking_theatre_image} source={{uri: booking.bookedTheatre?.image}} />
        <Text style={styles.booking_theatre_title}>{booking.bookedTheatre.name}</Text>
        <Text style={styles.booking_theatre_title}>{booking.bookedTheatre.date}</Text>
      </View>
      {booking.isSubmitted ?
        <View style={styles.booking_submitted}>
          <Icon name="check" color="green" size={26} />
          <Text style={styles.booking_submitted_text}>Submitted</Text>
        </View>
        :
        <TouchableRipple
          disabled={!isConnected}
          onPress={handleSubmit}
          style={[styles.booking_submit, !isConnected && styles.booking_submit_disabled]}
        >
          <Text style={styles.booking_submit_text}>Submit</Text>
        </TouchableRipple>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  booking: {
    width: '100%',
    alignItems: 'flex-start',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  booking_field: {
    width: '100%',
    fontSize: 20,
    color: '#000',
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  booking_theatre_title: {
    fontSize: 20,
    color: '#000',
    marginBottom: 10,
  },
  booking_theatre: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 4,
    borderColor: purple,
    padding: 20,
  },
  booking_theatre_image: {
    marginBottom: 10,
    width: 50,
    height: 50,
  },
  booking_submit: {
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: purple,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  booking_submit_disabled: {
    backgroundColor: purpleDisabled,
  },
  booking_submit_text: {
    color: '#fff',
    fontSize: 18,
  },
  booking_submitted: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
    minHeight: 44.4,
  },
  booking_submitted_text: {
    fontSize: 20,
    color: '#000',
    marginLeft: 10,
    fontFamily: 'njnaruto',
  },
});

export default Booking;
