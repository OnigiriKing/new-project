import { createSlice } from "@reduxjs/toolkit";
import usersData from "utils/data/usersData";

const initialState = JSON.parse(localStorage.getItem("users")) || usersData;

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { name, email, password } = action.payload;
      if (!state.users[email]) {
        state.users[email] = { name, email, password };
        localStorage.setItem("users", JSON.stringify(state));
      }
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      if (state.users[email] && state.users[email].password === password) {
        console.log(
          "user:" + state.users[email],
          "pass:" + state.users[email].password,
          "passed info:" + email, "-", password
        );
        state.currentUser = email;
        state.isLoggedIn = true;
        localStorage.setItem("users", JSON.stringify(state));
      }
    },
    logOut: (state, action) => {
      if (state.isLoggedIn === true) {
        state.currentUser = "";
        state.isLoggedIn = false;
        localStorage.setItem("users", JSON.stringify(state));
      }
    },
  },
});

export const { registerUser, loginUser, logOut } = userInfoSlice.actions;
export default userInfoSlice.reducer;
