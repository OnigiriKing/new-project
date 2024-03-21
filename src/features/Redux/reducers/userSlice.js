import { createSlice } from "@reduxjs/toolkit";
import usersData from "utils/data/usersData";

const initialState = usersData;

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    registerUser: (state, action) => {
        const [login, password] = action.payload;

    },
    logInUser: (state, action) => {
        const [login, password] = action.payload;
        
    }
    
  },
});

export const { setLogin } = userInfoSlice.actions;
export default userInfoSlice.reducer;
