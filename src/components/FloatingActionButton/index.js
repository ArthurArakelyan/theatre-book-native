import React, {memo} from "react";
import {StyleSheet} from "react-native";
import {FAB} from "react-native-paper";

const FloatingActionButton = ({handleClick}) => {
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
    position: 'absolute',
    right: 15,
    bottom: 70,
  },
});

export default memo(FloatingActionButton);
