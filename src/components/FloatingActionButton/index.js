import React, {memo} from "react";
import {StyleSheet} from "react-native";
import {FAB} from "react-native-paper";
import useAnimation from "../../hooks/useAnimation";

const FloatingActionButton = ({handleClick, disabled = false}) => {
  const anim = useAnimation(0, {
    toValue: 1,
    duration: 300,
    delay: 100,
    useNativeDriver: true,
  });

  return (
    <FAB
      style={{
        ...styles.fab,
        opacity: anim,
      }}
      icon="plus"
      onPress={handleClick}
      disabled={disabled}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: 'orange',
    position: 'absolute',
    right: 5,
    bottom: 10,
  },
});

export default memo(FloatingActionButton);
