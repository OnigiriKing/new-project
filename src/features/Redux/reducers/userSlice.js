import { createSlice } from "@reduxjs/toolkit";
import usersData from "utils/data/usersData";

const initialState = JSON.parse(localStorage.getItem("users")) || usersData;


const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { email, password } = action.payload;
      if (!state[email]) { 
        state[email] = { email, password };
        localStorage.setItem("users", JSON.stringify(current(state))); 
      }
  },
});

export const { setLogin } = userInfoSlice.actions;
export default userInfoSlice.reducer;
