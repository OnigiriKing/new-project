import { Link } from "react-router-dom";
import redBrush from "../img/redBrush.png";
import test from "./img/Jogging.jpg"

export default function Chart() {
  return (
    <div class="flex justify-center items-center  bg-white  my-6">
      <div class="flex flex-col common-wrapper items-center gap-8 text-center py-2">
        <div class="mb-4 mt-[5rem] relative w-[13rem] flex flex-col items-center">
          <p class="z-[6] font-bold text-white">PRICING CHART</p>
          <img class="absolute -top-[1rem]  z-[5] " src={redBrush} />
        </div>
        <h3></h3>
        <p></p>
        {/* Price */}
        <div class="flex items-center bg-red-50">
          <div class="flex flex-col group relative w-[20rem] h-[30rem] z-[1]">
            <img
              src={test}
              class=" grayscale-[1] duration-[.4s]
            bg-bg-class-4 group-hover:grayscale-[0]"
            ></img>
            <div class="flex flex-col w-full h-full">
              <h3>Level</h3>
              <div>
                $ <b>40</b> p/m
              </div>
              <div class="">
                <p>Des</p>
              </div>
              <Link class="button-class absolute bottom-0">PURCHASE NOW</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
