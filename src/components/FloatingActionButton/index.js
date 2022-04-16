import React from "react";
import {StyleSheet} from "react-native";
import {FAB} from "react-native-paper";

const FloatingActionButton = () => {
  const handleClick = () => {

  };

  return (
    <FAB
      style={styles.fab}
      icon="plus"
      onPress={handleClick}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: 'orange',
    color: '#ffffff',
    position: 'absolute',
    right: '3%',
    bottom: '10%',
  },
});

export default FloatingActionButton;
