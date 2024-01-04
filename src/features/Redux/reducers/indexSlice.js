import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ibm: 0,
  weight: "",
};

const indexSlice = createSlice({
  name: "indexSlice",
  initialState,
  reducers: {
    calculate: (state, action) => {
      const { weight, height } = action.payload;
      
    },
  },
});

export const { next, prev } = indexSlice.actions;
export default indexSlice.reducer;
