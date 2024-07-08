import sportsMan from "../img/sportsMan.png";
import allSvg from "svg/allSvg";
import brush from "../img/brush.png";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div class="flex center h-[107vh] justify-end items-center  bg-black pt-24 text-white">
      <div>
        <img
          src={sportsMan}
          class="w-[30rem] absolute -bottom-3 left-[10rem] z-[5]"
          alt="img"
        />
        <div class="flex gap-16 mr-[10rem] items-center">
          <div class="z-[10] flex flex-col gap-10">
            <div class="relative flex items-center w-[14rem]">
              <img
                src={brush}
                class="absolute z-[1] h-20 right-[1.8rem]"
                alt="img"
              />
              <h3 class="z-[2] relative text-black font-bold">
                FIND YOUR ENERGY
              </h3>
            </div>
            <div class="text-5xl">
              <b>MAKE YOUR BODY</b>
              <h2>FIT & PERFECT</h2>
            </div>
            <Link class="button-class-light" to={"/"}>
              OUR CLASSES {allSvg(20).arrow}
            </Link>
          </div>
          <div class="flex flex-col gap-7">
            <h3 class=" -rotate-[90deg] font-bold text-[1.2rem]">SHARE</h3>
            <div class=" w-[2.1rem] h-10 border-red-500 border-r-2"></div>
            <div class="flex flex-col items-center gap-2">
              <a
                class="cursor-pointer hover:text-red-600 duration-[.4s]"
                href="/"
              >
                {allSvg(25).linkedin}
              </a>
              <a
                class="cursor-pointer hover:text-red-600 duration-[.4s] "
                href="/"
              >
                {allSvg(25).twitter}
              </a>
              <a
                class="cursor-pointer hover:text-red-600 duration-[.4s] "
                href="/"
              >
                {allSvg(25).facebook}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
