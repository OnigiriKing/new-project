import { createSlice } from "@reduxjs/toolkit";

const initialState = true;

const loginWindowSlice = createSlice({
  name: "openSlice",
  initialState,
  reducers: {
    setLoginOpen: (state, action) => {
      return true;
    },
    setLoginClose: (state, action) => {
      return false;
    },
  },
});

export const { setLoginOpen, setLoginClose } = loginWindowSlice.actions;
export default loginWindowSlice.reducer;
