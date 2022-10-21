import * as React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { LogBox } from "react-native";
import { store } from "./redux/store";
import NavigationScreen from "./Screens/NavigationScreen";
LogBox.ignoreLogs(["Sending..."]);
LogBox.ignoreLogs([
  "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
]);

export default function App() {
  const [fontLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationScreen />
      </NavigationContainer>
    </Provider>
  );
}
