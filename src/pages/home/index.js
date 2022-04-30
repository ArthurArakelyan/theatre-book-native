import React from "react";
import {View, StyleSheet} from "react-native";

import Theatres from "./Theatres";

const Home = () => {
  return (
    <View style={styles.home}>
      <Theatres />
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    height: '100%',
    paddingVertical: 10,
  },
});

export default Home;
