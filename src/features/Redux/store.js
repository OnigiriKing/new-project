import { configureStore } from "@reduxjs/toolkit";
import reviewSlice from "./reducers/reviewSlice";
import indexSlice from "./reducers/indexSlice";
import openSlice from "./reducers/openSlice";


const store = configureStore({
  reducer: {
    review: reviewSlice,
    bodyIndex: indexSlice,
    openState: openSlice,
  },
});

export default store;