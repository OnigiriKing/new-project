import { configureStore } from "@reduxjs/toolkit";
import reviewSlice from "./reducers/reviewSlice";
import indexSlice from "./reducers/indexSlice";


const store = configureStore({
  reducer: {
    review: reviewSlice,
    bodyIndex: indexSlice,
  },
});

export default store;