import React, {memo} from "react";
import {Text, Animated, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {TouchableRipple} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {primaryColor} from "../../assets/colors";

import AppBarRight from "./AppBarRight";

const AppBar = () => {
  const navigation = useNavigation();

  const canGoBack = navigation.canGoBack();

  return (
    <Animated.View style={styles.header}>
      {canGoBack &&
        <TouchableRipple borderless style={styles.goBack} onPress={navigation.goBack}>
          <Icon name="arrow-left" size={22} color="#fff" />
        </TouchableRipple>
      }

      <Text style={[styles.title, canGoBack && styles.title_go_back]}>Theatre API</Text>

      <AppBarRight />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 55,
    backgroundColor: primaryColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "500",
  },
  title_go_back: {
    marginLeft: 50,
  },
  goBack: {
    position: 'absolute',
    left: 10,
    padding: 10,
    borderRadius: 50,
  },
});

export default memo(AppBar);
