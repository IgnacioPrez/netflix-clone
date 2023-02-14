import { createSlice } from "@reduxjs/toolkit";
import { clearLocalStorage, persistInLocalStorage } from "../../utils/functions/localStorageFunction";

const initialState = {
  id: 0,
  name: "",
  email: "",
  password: "",
  logged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : initialState,
  reducers: {
    createUser: (state, action) => {
      persistInLocalStorage("auth", action.payload);
      return action.payload;
    },
    login: (state, action) => {
      const newState = action.payload;
      const succes = state.email === newState.email && state.password === newState.password;
      if (succes) {
        const result = { ...state, logged: true };
        persistInLocalStorage("auth", { ...state, logged: true });
        return result;
      } else {
        return { ...state, logged: false };
      }
    },
    logout: () => {
      clearLocalStorage("auth");
      return initialState;
    },
  },
});

export const { createUser, login, logout } = userSlice.actions;
export default userSlice.reducer;
