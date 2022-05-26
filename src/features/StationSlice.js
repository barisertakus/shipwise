import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  name: "",
  location: "",
  about: "",
  shift: "",
};

const stationSlice = createSlice({
  name: "station",
  initialState,
  reducers: {
    selectStation: (state, action) => {
      const { id, name, location, about, shift } = action.payload;
      state.id = id;
      state.location = location;
      state.name = name;
      state.about = about;
      state.shift = shift;
    },
  },
});

export const stationSelector = (state) => state.station;

export const { selectStation } = stationSlice.actions;
export default stationSlice.reducer;
