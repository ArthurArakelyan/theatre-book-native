import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from "react-redux";
import {Provider as PaperProvider, DefaultTheme} from "react-native-paper";

import AppBar from "./components/AppBar";
import Home from "./pages/home";
import FloatingActionButton from "./components/FloatingActionButton";
import AddTheatreModal from "./components/AddTheatreModal";

import store from "./store/configureStore";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen((value) => !value);
  }

  return (
    <Provider store={store}>
      <PaperProvider theme={DefaultTheme}>
        <SafeAreaView style={styles.app}>
          <AppBar />
          <Home />
          <FloatingActionButton handleClick={handleToggleModal} />
          <AddTheatreModal
            visible={isModalOpen}
            toggle={handleToggleModal}
          />
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
