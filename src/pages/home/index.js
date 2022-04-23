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
    paddingTop: 10,
    paddingBottom: 130,
  },
});

export default Home;
