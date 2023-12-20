import redBrush from "../img/redBrush.png";
import allSvg from "svg/allSvg";

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
          <img></img>
          <div class="flex flex-col gap-1">
            <div></div>
            <h4>Maxwell Rivera</h4>
            <p>Bodybuilding</p>
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
              <div class="hover:text-red-600 duration-[.4s] cursor-pointer">
                {allSvg(16).linkedin}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
