import allSvg from "svg/allSvg";
import bmi from "../img/bmi.png";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { calculate } from "features/Redux/reducers/indexSlice";

export default function Calculator() {
  const dispatch = useDispatch();
  const bodyIndex = useSelector((state) => state.bodyIndex);

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  return (
    <div class="flex justify-center items-center  bg-black text-white  my-6">
      <div class="flex common-wrapper gap-8 py-14 relative">
        <div class="flex flex-col gap-5 w-[28rem]">
          <h3 class="text-4xl">
            Let's Calculate Your <b class="text-red-600">BMI</b>
          </h3>
          <p class="text-gray-400">
            Easily determine your body mass index with our accurate calculation
            tool.
          </p>
          <div class="flex flex-col gap-6 z-10">
            <div class="flex gap-4">
              <input
                placeholder="Weight / kg"
                class={`px-4 py-2 bg-black border-neutral-500 border-2 ${
                  /[a-zA-Z]/.test(weight) ? "border-red-600" : ""
                }`}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              ></input>
              <input
                placeholder="Height / cm"
                class={`px-4 py-2 bg-black border-neutral-500 border-2 ${
                  /[a-zA-Z]/.test(height) ? "border-red-600" : ""
                }`}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              ></input>
            </div>
            <div class="flex gap-4">
              <div class="w-[50%] flex">
                <h4>
                  Your BMI is: <b>{bodyIndex.bmi}</b>
                </h4>
              </div>
              <div class="w-[50%] flex">
                <h4>
                  Your weight is: <b>{bodyIndex.weight}</b>
                </h4>
              </div>
            </div>
            <button
              class="button-class"
              disabled={
                /[a-zA-Z]/.test(height) ||
                /[a-zA-Z]/.test(weight) ||
                weight === "" ||
                height === ""
              }
              onClick={() =>
                dispatch(
                  calculate({
                    weight: parseInt(weight),
                    height: parseInt(height),
                  })
                )
              }
            >
              Calculate {allSvg(20).arrow}
            </button>
          </div>
        </div>
        <div class="w-[50%] flex justify-end ">
          <img class="h-[25rem] absolute top-0" src={bmi} alt="img"></img>
        </div>
      </div>
    </div>
  );
}
