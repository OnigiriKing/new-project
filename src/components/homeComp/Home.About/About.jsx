import allSvg from "svg/allSvg";

export default function About() {
  return (
    <div class="flex h-screen bg-gray-200 w-full justify-center">
      <div class="w-full max-w-[70rem]">
        <div class="flex gap-6  relative bottom-12 z-30">
          <div class=" bg-white p-10 rounded-3xl flex flex-col text-center items-center w-[45rem] gap-2">
            <div class="text-red-600">{allSvg(60).time}</div>
            <h3 class="font-bold text-xl">PROGRESSION</h3>
            <p>
              Our team of experts will work with you to create a customized plan
              that helps you achieve success one step at a time.
            </p>
          </div>
          <div class=" bg-white p-10 rounded-3xl flex flex-col text-center items-center w-[45rem] gap-2">
            <div class="text-red-600">{allSvg(60).workout}</div>
            <h3 class="font-bold text-xl">WORKOUT</h3>
            <p>
              With a variety of workouts to choose from, you'll have everything
              you need to get into the best shape of your life.
            </p>
          </div>
          <div class=" bg-white p-10 rounded-3xl flex flex-col text-center items-center w-[45rem] gap-2">
            <div class="text-red-600">{allSvg(60).list}</div>
            <h3 class="font-bold text-xl">NUTRITIONS</h3>
            <p>
              Our team will work with you to create a personalized meal plan
              that helps you reach your specific health goals.
            </p>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
