import redBrush from "../img/redBrush.png";
import allSvg from "svg/allSvg";
import trainer1 from "utils/img/trainer/trainer1.png";

export default function Trainers() {
  return (
    <div class="flex justify-center items-center  bg-white  my-6">
      <div class="flex flex-col common-wrapper items-center gap-8 text-center">
        <div class="mb-4 mt-[5rem] relative w-[13rem] flex flex-col items-center">
          <p class="z-[6] font-bold text-white">OUR TRAINERS</p>
          <img class="absolute -top-[1rem]  z-[5] " src={redBrush} />
        </div>
        <h2 class="text-3xl font-bold">Team of Professional Gym Trainers</h2>
        <p class="w-[40%] text-gray-500">
          A dedicated team of professional gym trainers committed to assisting
          you in achieving your fitness goals.
        </p>
        <div class="grid justify-center">
          <div class="flex justify-center">
            <img class="w-[15rem]" src={trainer1}></img>
            <div></div>
          </div>
          <div class="flex flex-col gap-1 py-[2rem] px-[6rem] shadow-lg">
            <div></div>
            <h4 class="text-xl font-bold">Maxwell Rivera</h4>
            <p class="text-gray-500">Bodybuilding</p>
            <div class="flex justify-center gap-2 text-gray-500">
              <div class="hover:text-red-600 duration-[.4s] cursor-pointer">
                {allSvg(16).twitter}
              </div>
              <div class="hover:text-red-600 duration-[.4s] cursor-pointer">
                {allSvg(16).facebook}
              </div>
              <div class="hover:text-red-600 duration-[.4s] cursor-pointer">
                {allSvg(16).inst}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
