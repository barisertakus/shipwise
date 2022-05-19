import { configureStore } from "@reduxjs/toolkit";
import stationReducer from "../features/StationSlice";
import appReducer from "../features/appSlice";

export const store = configureStore({
  reducer: {
    station: stationReducer,
    app: appReducer
  },
});
