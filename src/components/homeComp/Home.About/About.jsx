import allSvg from "svg/allSvg";

export default function About() {
  return (
    <div class="flex h-screen bg-white w-full justify-center">
      <div class="w-full max-w-[70rem]">
        <div class="flex">
          <div class="flex flex-col text-center items-center">
            <div class="text-red-600">{allSvg(60).time}</div>
            <h3>PROGRESSION</h3>
            <p>
              Our team of experts will work with you to create a customized plan
              that helps you achieve success one step at a time.
            </p>
          </div>
          <div class="flex flex-col text-center items-center">
            <div>{allSvg(60).workout}</div>
            <h3>WORKOUT</h3>
            <p>
              With a variety of workouts to choose from, you'll have everything
              you need to get into the best shape of your life.
            </p>
          </div>
          <div class="flex flex-col text-center items-center">
            <div>{allSvg(60).list}</div>
            <h3>NUTRITIONS</h3>
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
