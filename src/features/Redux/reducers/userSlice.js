import { createSlice } from "@reduxjs/toolkit";
import usersData from "utils/data/usersData";
import profilePics from "utils/data/profilePics";

const initialState = JSON.parse(localStorage.getItem("users")) || usersData;

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { name, email, password } = action.payload;
      if (!state.users[email]) {
        state.users[email] = {
          name,
          email,
          password,
          img: profilePics.ppDef,
        };
        localStorage.setItem("users", JSON.stringify(state));
      }
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      if (state.users[email] && state.users[email].password === password) {
        state.currentUser = {
          name: state.users[email].name,
          email: state.users[email].email,
          img: state.users[email].img,
        };

        state.isLoggedIn = true;
        localStorage.setItem("users", JSON.stringify(state));
      }
    },
    logOut: (state, action) => {
      if (state.isLoggedIn === true) {
        state.currentUser = {};
        state.isLoggedIn = false;
        localStorage.setItem("users", JSON.stringify(state));
      }
    },
    changePic: (state, action) => {
      const { newPic } = action.payload;
      state.currentUser.img = newPic;
      state.users[state.currentUser.email].img = newPic;
      console.log(state.currentUser.img, "+", newPic);
      localStorage.setItem("users", JSON.stringify(state));
    },
    changePassword: (state, action) => {
      const { oldPass, newPass } = action.payload;
      if (oldPass == state.currentUser.password) {
        
      }
    }
  },
});

export const { registerUser, loginUser, logOut, changePic } = userInfoSlice.actions;
export default userInfoSlice.reducer;
