import React from "react";
import {Text, View, StyleSheet, Image, Button} from "react-native";

const Theatre = ({theatre}) => {
  const handleBook = () => {

  }

  return (
    <View style={styles.theatre}>
      <Text style={styles.theatre_name}>
        {theatre.name}
      </Text>
      <Image style={styles.theatre_image} source={{uri: theatre.image}} />
      <Button onPress={handleBook} color="orange" title="Book" />
    </View>
  );
}

const styles = StyleSheet.create({
  theatre: {
    width: '100%',
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
    marginBottom: 15,
    borderRadius: 4,
  },
});

export default Theatre;
