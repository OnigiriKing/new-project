import allSvg from "svg/allSvg";

export default function Calculator() {
  return (
    <div class="flex justify-center items-center  bg-black text-white  my-6">
      <div class="flex flex-col common-wrapper gap-8 py-14">
        <div class="flex flex-col gap-5 w-[28rem]">
          <h3 class="text-4xl">
            Let's Calculate Your <b class="text-red-600">BMI</b>
          </h3>
          <p class="text-gray-400">
            Easily determine your body mass index with our accurate calculation
            tool.
          </p>
          <div class="flex flex-col gap-6">
            <div class="flex gap-4">
              <input
                placeholder="Weight / kg"
                class="px-4 py-2 bg-black border-neutral-500 border-2"
              ></input>
              <input
                placeholder="Height / cm"
                class="px-4 py-2 bg-black border-neutral-500 border-2"
              ></input>
            </div>
            <div class="flex gap-4">
              <div class="w-[50%]">
                <h4>Your BMI is:</h4>
                <b></b>
              </div>
              <div class="w-[50%]">
                <h4>Your weight is:</h4>
                <b></b>
              </div>
            </div>
            <button class="self-start font-medium text-white bg-gray-700 px-8 py-4 group hover:bg-red-600 duration-500 flex items-center gap-2 justify-center w-fit">
              Calculate {allSvg(20).arrow}
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
