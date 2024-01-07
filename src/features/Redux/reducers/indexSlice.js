import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bmi: "",
  weight: "",
};

const indexSlice = createSlice({
  name: "indexSlice",
  initialState,
  reducers: {
    calculate: (state, action) => {
      const { weight, height } = action.payload;
      const bmi = parseInt(weight / (height / 100) ** 2);
      let status = "Invalid BMI";
      if (bmi < 18.5) {
         status = "Underweight";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
         status = "Normal";
      } else if (bmi >= 25.0 && bmi <= 29.9) {
         status = "Overweight";
      } else if (bmi >= 30.0) {
         status = "Obesity";
      } 

      return {
        bmi: bmi,
        weight: status,
      };
    },
  },
});

export const { calculate } = indexSlice.actions;
export default indexSlice.reducer;
