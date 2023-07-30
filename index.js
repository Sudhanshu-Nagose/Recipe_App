/**
 * @format
 */

import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import Store from "./scr/redux/Store";

const FoodApp = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Provider store={Store}>
      <App />
    </Provider>
  </GestureHandlerRootView>
);

AppRegistry.registerComponent(appName, () => FoodApp);
