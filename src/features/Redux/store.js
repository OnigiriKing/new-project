import { configureStore } from "@reduxjs/toolkit";
import reviewSlice from "./reducers/reviewSlice";


const store = configureStore({
  reducer: {
    review: reviewSlice,
  },
});

export default store;