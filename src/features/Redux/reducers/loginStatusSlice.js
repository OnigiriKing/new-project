import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "Sign Up",
  login: "correct",
  password: "correct",
};

const loginStatusSlice = createSlice({
  name: "loginStatus",
  initialState,
  reducers: {
    setLoginStatus: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setLoginStatus } = loginStatusSlice.actions;
export default loginStatusSlice.reducer;
