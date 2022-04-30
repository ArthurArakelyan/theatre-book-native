import React from "react";
import {View, StyleSheet, ActivityIndicator} from "react-native";

import {primaryColor} from "../../assets/colors";

const PageLoading = () => {
  return (
    <View style={styles.center}>
      <ActivityIndicator size={80} color={primaryColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '60%',
  },
});

export default PageLoading;
