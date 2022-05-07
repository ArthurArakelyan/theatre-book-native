import React from "react";
import {Provider} from "react-redux";
import {Provider as PaperProvider, DefaultTheme} from "react-native-paper";
import {NetworkProvider} from "react-native-offline";

import store from "../../store/configureStore";

const Providers = ({children}) => {
  return (
    <Provider store={store}>
      <PaperProvider theme={DefaultTheme}>
        <NetworkProvider>
          {children}
        </NetworkProvider>
      </PaperProvider>
    </Provider>
  );
};

export default Providers;
