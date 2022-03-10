import React from "react";
import RootNavigation from "./src/navigation/RootNavigation";
import { store } from "./src/app/store";
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
