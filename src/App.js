import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from "react-redux";
import {Provider as PaperProvider, DefaultTheme, Portal} from "react-native-paper";

import AppBar from "./components/AppBar";
import Home from "./pages/home";
import FloatingActionButton from "./components/FloatingActionButton";
import AddTheatreModal from "./components/AddTheatreModal";

import store from "./store/configureStore";

export const API_URL = process.env.API_URL;

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen((value) => !value);
  }

  return (
    <Provider store={store}>
      <PaperProvider theme={DefaultTheme}>
        <SafeAreaView>
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

export default App;
