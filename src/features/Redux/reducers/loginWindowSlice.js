import { createSlice } from "@reduxjs/toolkit";

const initialState = true;

const loginWindowSlice = createSlice({
  name: "loginWindow",
  initialState,
  reducers: {
    setLogin: (state, action) => action.payload,
  },
});

export const { setLogin } = loginWindowSlice.actions;
export default loginWindowSlice.reducer;
