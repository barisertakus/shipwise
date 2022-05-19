import { createSlice } from "@reduxjs/toolkit";
import deviceStorage from "../utils/deviceStorage";

const initialState = {
  user: {},
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    login: (state, action) => {
      const { name, username, token } = action.payload;
      state.user = { name, username };
      deviceStorage.saveItem("token", token);
    },
    logout: (state) => {
      state.user = {}
    },
  },
});

export const selectUser = (state) => state.app.user;

export const { login, logout } = appSlice.actions;
export default appSlice.reducer;
