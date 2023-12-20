import redBrush from "../img/redBrush.png";
import allSvg from "svg/allSvg";
import trainer1 from "utils/img/trainer/trainer1.png";
import trainer2 from "utils/img/trainer/trainer2.png";
import trainer3 from "utils/img/trainer/trainer3.png";

export default function Trainers() {

  function Coach({img, name, des, width}) {

    return (
      <div class="group">
        <div class="flex justify-center grayscale group-hover:grayscale-[0] duration-[0.4s]">
          <img class={width} src={img}></img>
          <div></div>
        </div>
        <div class="flex flex-col gap-1 py-[2rem] px-[6rem] shadow-lg relative ">
          <div class="flex justify-center bg-white pt-2 pb-6 px-5 rounded-full absolute -top-[1.7rem] right-[40%]">
            {allSvg(20).arrowSmall}
          </div>
          <h4 class="text-xl font-bold">{name}</h4>
          <p class="text-gray-500">{des}</p>
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
          <div class="h-2 bg-red-600 absolute bottom-0 left-[50%]"></div>
        </div>
      </div>
    );
  }
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
        <div class="grid justify-center grid-flow-col gap-4">
          <Coach
            img={trainer1}
            name={"Maxwell Rivera"}
            des={"Bodybuilding"}
            width="w-[15rem]"
          />
          <Coach
            img={trainer2}
            name={"Yuki Tanaka"}
            des={"Zen Meditation"}
            width="w-[17rem]"
          />
          <Coach
            img={trainer3}
            name={"Yuki Tanaka"}
            des={"Zen Meditation"}
            width="w-[13.2rem]"
          />
        </div>
      </div>
    </div>
  );
}
