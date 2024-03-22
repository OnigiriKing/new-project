import { createSlice } from "@reduxjs/toolkit";
import usersData from "utils/data/usersData";

const initialState = usersData;

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const [login, password] = action.payload;
      return { ...state, login: { email: login, password: password } };
    },
  },
});

export const { setLogin } = userInfoSlice.actions;
export default userInfoSlice.reducer;
