import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Home from "./pages/home";
import Admin from "./pages/admin";
import AddTheatreFAB from "./components/AddTheatreFAB";
import SyncStoreWithStorage from "./components/SyncStoreWithStorage";
import Providers from "./components/Providers";

import appNavigatorOptions from "./constatns/appNavigatorOptions";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Providers>
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
        <SyncStoreWithStorage />
      </SafeAreaView>
    </Providers>
  );
};

const styles = StyleSheet.create({
  app: {
    minHeight: '100%',
  },
});

export default App;
