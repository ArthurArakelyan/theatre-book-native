import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {TouchableRipple} from "react-native-paper";

const PageError = ({handleClick}) => {
  return (
    <View style={styles.center}>
      <Text style={styles.message}>Error</Text>
      <TouchableRipple style={styles.message_button} onPress={handleClick}>
        <Text style={styles.message_button_text}>Try again</Text>
      </TouchableRipple>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '60%',
  },
  message: {
    fontSize: 32,
    color: '#ff0000',
  },
  message_button: {
    marginTop: 10,
    backgroundColor: '#6200EE',
    padding: 10,
    borderRadius: 3,
  },
  message_button_text: {
    color: '#ffffff',
    fontSize: 26,
  },
});

export default PageError;
