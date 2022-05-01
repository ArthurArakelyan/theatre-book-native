import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from "react-redux";
import {Provider as PaperProvider, DefaultTheme} from "react-native-paper";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Home from "./pages/home";
import Admin from "./pages/admin";
import AddTheatreFAB from "./components/AddTheatreFAB";

import store from "./store/configureStore";

import appNavigatorOptions from "./constatns/appNavigatorOptions";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={DefaultTheme}>
        <SafeAreaView style={styles.app}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName='home'
              screenOptions={appNavigatorOptions}
            >
              <Stack.Screen name="home" component={Home} />
              <Stack.Screen name="admin" component={Admin} />
            </Stack.Navigator>
          </NavigationContainer>

          <AddTheatreFAB />
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  app: {
    minHeight: '100%',
  },
});

export default App;
