import React, {memo} from "react";
import {StyleSheet, Animated, Text} from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";

import useAnimation from "../../hooks/useAnimation";

const Submitted = ({style}) => {
  const anim = useAnimation(0,{
    toValue: 1,
    duration: 500,
  });

  return (
    <Animated.View style={[styles.submitted, style, { opacity: anim, transform: [{scale: anim}] }]}>
      <Icon name="check" color="green" size={26} />
      <Text style={styles.submitted_text}>Submitted</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  submitted: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  submitted_text: {
    fontSize: 20,
    color: '#000',
    marginLeft: 10,
    overflow: "hidden",
    fontFamily: 'njnaruto',
  },
});

export default memo(Submitted);
