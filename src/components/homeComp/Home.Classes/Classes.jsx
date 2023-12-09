import redBrush from "../img/redBrush.png";
import allSvg from "svg/allSvg";

export default function Classes() {
  return (
    <div class="flex justify-center items-center  bg-white">
      <div class="flex flex-col common-wrapper items-center gap-8 mx-4">
        <div class="relative w-[11rem] flex flex-col items-center">
          <h3 class="text-white relative z-[10] ">WHO WE ARE</h3>
          <img class="absolute -top-3  z-[5] " src={redBrush} />
        </div>
        <h3>We Offer Top-notch Flexible Classes</h3>
        <div class="relative grid grid-cols-4 grid-flow-row grid-rows-2 gap-4 w-full h-full">
          <div class="class-item-wrap md:col-span-2 group relative">
            <div class="class-item-side group-hover:bg-white duration-[0.4s]">
              <p class="duration-[0.4s] px-3 py-2 rotate-[-30deg] text-white group-hover:text-red-600">
                {allSvg(50).lifting}
              </p>
            </div>
            <div class="class-item-text">
              <p class="text-2xl font-medium">Lifting</p>
              <p class="bg-red-600">Wednesday: 9:00am-10:00am</p>
            </div>
            <div
              class=" class-item
            bg-bg-class1 group-hover:scale-[1] group-hover:grayscale-[0]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
