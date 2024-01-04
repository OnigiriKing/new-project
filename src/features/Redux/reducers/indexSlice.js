import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bmi: 0,
  weight: "",
};

const indexSlice = createSlice({
  name: "indexSlice",
  initialState,
  reducers: {
    calculate: (state, action) => {
      const { weight, height } = action.payload;
      const bmi = weight / (height / 100) ** 2;
      if (bmi < 18.5) {
        const status = "Underweight";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        const status = "Healthy Weight";
      } else if (bmi >= 25.0 && bmi <= 29.9) {
        const status = "Overweight";
      } else if (bmi >= 30.0) {
        const status = "Obesity";
      } else {
        const status = "Invalid BMI";
      }

      return {
        bmi: bmi,
        weight: status,
      };
    },
  },
});

export const { next, prev } = indexSlice.actions;
export default indexSlice.reducer;
