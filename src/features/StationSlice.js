import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  location: "",
};

const stationSlice = createSlice({
  name: "station",
  initialState,
  reducers: {
    selectStation: (state, action) => {
      const { name, location } = action.payload;
      state.location = location;
      state.name = name;
    },
  },
});

export const stationSelector = (state) => state.station;

export const { selectStation } = stationSlice.actions;
export default stationSlice.reducer;
