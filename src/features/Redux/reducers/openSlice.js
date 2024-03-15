import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const openSlice = createSlice({
  name: "openSlice",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      return true;
    },
    setClise: (state, action) => {
      return false;
    },
  },
});

export const { calculate } = openSlice.actions;
export default openSlice.reducer;
