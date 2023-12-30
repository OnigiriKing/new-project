import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;

const reviewSlice = createSlice({
    name: "reviewCount",
    initialState,
    reducers: {
        next: (state, action) => {
            if (state < 3) {
                state++
            } else {
                state = 1;
            }
        },
        prev: (state, action) => {
            if (state > 1) {
                state--
            } else {
                state = 3;
            }
        }
    }
})


export const { next, prev } = reviewSlice.actions;
export default reviewSlice.reducer;