import React from "react";

import AppBar from "../components/AppBar";

import {primaryColor} from "../assets/colors";

const appNavigatorOptions = {
  headerStyle: { backgroundColor: primaryColor },
  headerTintColor: '#ffffff',
  headerTitle: 'Theatre API',
  headerRight: () => <AppBar />,
  animation: 'slide_from_right',
};

export default appNavigatorOptions;
