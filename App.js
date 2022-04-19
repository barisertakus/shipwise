import React from "react";
import RootNavigation from "./src/navigation/RootNavigation";
import { store } from "./src/app/store";
import { Provider } from "react-redux";
import { NativeBaseProvider } from "native-base";
export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
      <RootNavigation />
      </NativeBaseProvider>
    </Provider>
  );
}
