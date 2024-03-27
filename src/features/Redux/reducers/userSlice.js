import { createSlice } from "@reduxjs/toolkit";
import usersData from "utils/data/usersData";

const initialState = JSON.parse(localStorage.getItem("users")) || usersData;


const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { email, password } = action.payload;
      if (!state.users[email]) { 
        state.users[email] = { email, password };
        localStorage.setItem("users", JSON.stringify(state)); 
      }
  },
  loginUser: (state, action) => {
      const { email, password } = action.payload;
      if (state.users[email] && state.users[email].password === password) {
        state.currentUser = email;
        state.isLoggedIn = true;
        localStorage.setItem("users", JSON.stringify(state))
      }
      }
}});

export const { registerUser, loginUser } = userInfoSlice.actions;
export default userInfoSlice.reducer;
