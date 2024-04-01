import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "Sign Up",
  login: "",
  password: "",
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
