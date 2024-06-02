import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: true,
  info: true,
};

const loginWindowSlice = createSlice({
  name: "loginWindow",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setLogin } = loginWindowSlice.actions;
export default loginWindowSlice.reducer;


