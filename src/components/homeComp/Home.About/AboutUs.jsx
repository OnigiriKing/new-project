import allSvg from "svg/allSvg";
import run from "utils/img/run.png";
import redBrush from "utils/img/redBrush.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div class="flex h-[120vh] bg-gray-200 w-full justify-center">
      <div class="common-wrapper py-2">
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
        <div class="flex mx-[2rem]">
          <div class="flex gap-6 flex-col z-10">
            <div class="relative">
              <h3 class="text-white relative z-[10] font-bold ">WHO WE ARE</h3>
              <img
                class="absolute w-[12rem] -top-[.9rem] -left-[2.3rem] z-[5]"
                src={redBrush}
                alt="img"
              />
            </div>
            <h3 class="text-3xl font-bold">
              Take Your Health And Body To Next Level
            </h3>
            <p class="text-gray-500">
              Take your health and body to the next level with our comprehensive
              program designed to help you reach your fitness goals.
            </p>
            <div class="flex gap-4 text-center py-8">
              <div class="flex flex-col items-center gap-2">
                <div class="text-red-600">{allSvg(50).lifting}</div>
                <h3 class="text-lg font-bold">PROFESSIONAL TRAINERS</h3>
              </div>
              <div class="flex flex-col items-center gap-2">
                <div class="text-red-600">{allSvg(50).weight}</div>
                <h3 class="text-lg font-bold">MODERN EQUIPMENTS</h3>
              </div>
              <div class="flex flex-col items-center gap-2">
                <div class="text-red-600">{allSvg(50).bacycle}</div>
                <h3 class="text-lg font-bold">FANCY GYM MACHINES</h3>
              </div>
            </div>
            <Link class="button-class">TAKE A TOUR {allSvg(20).arrow}</Link>
          </div>
          <div class="w-[70rem] flex items-center">
            <img src={run} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}
