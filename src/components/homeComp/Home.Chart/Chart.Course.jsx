import { Link } from "react-router-dom";
import allSvg from "svg/allSvg";

export function Course({ img, Level, price, des }) {
  return (
    <div class="flex flex-col group relative w-[25rem] h-[40rem] z-[1] shadow-lg">
      <img
        src={img}
        class=" grayscale-[1] duration-[.4s]
            bg-bg-class-4 group-hover:grayscale-[0]"
      ></img>
      <div class="flex flex-col w-full p-2 mt-5">
        <h3 class="bg-white absolute top-[43%] right-1/2 translate-x-1/2 px-6 py-2 font-bold">
          {Level}
        </h3>
        <div class="text-3xl text-gray-600">
          $ <b class="text-5xl text-black">{price}</b> p/m
        </div>
        <p class="mt-4 h-[6rem]">{des}</p>
        <Link class="button-class self-center mt-10">
          PURCHASE NOW {allSvg(20).arrow}
        </Link>
      </div>
    </div>
  );
}
