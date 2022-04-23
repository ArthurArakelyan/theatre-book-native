import React from "react";
import {useSelector} from "react-redux";
import {Text, View, StyleSheet, Image, Button} from "react-native";

import bookingsService from "../../../services/bookingsService";

const Theatre = ({theatre}) => {
  const user = useSelector((state) => state.user);

  const date = new Date(theatre.date);

  const handleBook = async () => {
    const book = await bookingsService.bookTheatre(theatre.id);
  };

  return (
    <View style={styles.theatre}>
      <Text style={styles.theatre_name}>
        {theatre.name}
      </Text>
      <Image style={styles.theatre_image} source={{uri: theatre.image}} />
      <View style={styles.theatre_actions}>
        <Text style={styles.theatre_date}>
          {date.toLocaleDateString()}
          <Text style={styles.theatre_date_divider}> </Text>
          {date.toLocaleTimeString().slice(0, 5)}
        </Text>
        {user && <Button onPress={handleBook} color="#6200EE" title="Book" />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  theatre: {
    width: '100%',
    backgroundColor: '#b0afaf',
    padding: 20,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 20,
  },
  theatre_name: {
    textAlign: 'center',
    fontSize: 26,
    color: '#000000',
    marginBottom: 10,
    width: '100%',
  },
  theatre_image: {
    width: 250,
    height: 200,
    borderRadius: 4,
  },
  theatre_actions: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 15,
  },
  theatre_date: {
    fontSize: 16,
    color: '#000',
  },
  theatre_date_divider: {
    marginLeft: 5,
  },
});

export default Theatre;
