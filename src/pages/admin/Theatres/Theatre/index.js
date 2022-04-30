import React from "react";
import {View, StyleSheet, Text, Linking} from "react-native";
import {TouchableRipple} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

import {primaryColor} from "../../../../assets/colors";

const Theatre = ({theatre, handleDelete}) => {
  const openImage = () => {
    Linking.openURL(theatre.image);
  };

  return (
    <View style={styles.theatre}>
      <Text style={styles.theatre_field}>ID: {theatre._id}</Text>
      <Text style={styles.theatre_field}>Name: {theatre.name}</Text>
      <Text onPress={openImage} style={[styles.theatre_field, styles.theatre_field_url]}>URL: {theatre.image}</Text>
      <Text style={styles.theatre_field}>Date: {theatre.date}</Text>
      <View style={styles.theatre_actions}>
        {/*<TouchableRipple style={styles.theatre_action} onPress={() => {}}>*/}
        {/*  <Icon name="edit" size={32} color={primaryColor} />*/}
        {/*</TouchableRipple>*/}
        <TouchableRipple style={styles.theatre_action} onPress={() => handleDelete(theatre)}>
          <Icon name="delete-forever" size={32} color="red" />
        </TouchableRipple>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  theatre: {
    width: '100%',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  theatre_field: {
    fontSize: 20,
    color: '#000',
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  theatre_field_url: {
    color: primaryColor,
    textDecorationLine: 'underline',
  },
  theatre_actions: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 50,
  },
  theatre_action: {
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
  },
});

export default Theatre;
