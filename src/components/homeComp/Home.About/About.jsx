import allSvg from "svg/allSvg";
import run from "../img/run.png"

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
        <div class="flex">
          <div>
            <div>
              <h3>WHO WE ARE</h3>
              <div></div>
            </div>
            <h3>Take Your Health And Body To Next Level</h3>
            <p>
              Take your health and body to the next level with our comprehensive
              program designed to help you reach your fitness goals.
            </p>
            <div>
              <div>
                <h3>PROFESSIONAL TRAINERS</h3>
              </div>
              <div>
                <h3>MODERN EQUIPMENTS</h3>
              </div>
              <div>
                <h3>FANCY GYM MACHINES</h3>
              </div>
            </div>
            <button>TAKE A TOUR </button>
          </div>
          <div class="w-[40rem]">
            <img src={run} />
          </div>
        </div>
      </div>
    </div>
  );
}
