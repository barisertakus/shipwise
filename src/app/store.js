import { configureStore } from "@reduxjs/toolkit";
import stationReducer from "../features/StationSlice";
export const store = configureStore({
  reducer: {
    station: stationReducer,
  },
});
