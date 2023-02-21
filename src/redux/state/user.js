import { createSlice } from "@reduxjs/toolkit";
import { clearLocalStorage, persistInLocalStorage } from "../../utils/functions/localStorageFunction";

const initialState = {
  id: 0,
  email: "",
  password: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : initialState,
  reducers: {
    login: (state, action) => {
      persistInLocalStorage("auth", action.payload);
      return action.payload;
    },
    logout: () => {
      clearLocalStorage("auth");
      return initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
