import { configureStore } from "@reduxjs/toolkit";
import reviewSlice from "./reducers/reviewSlice";
import indexSlice from "./reducers/indexSlice";
import loginWindowSlice from "./reducers/loginWindowSlice";


const store = configureStore({
  reducer: {
    review: reviewSlice,
    bodyIndex: indexSlice,
    loginWindow: loginWindowSlice,
  },
});

export default store;