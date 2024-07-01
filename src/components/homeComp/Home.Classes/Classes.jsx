import redBrush from "utils/img/redBrush.png";
import allSvg from "svg/allSvg";

export default function Classes() {
  return (
    <div class="flex justify-center items-center  bg-white  my-6">
      <div class="flex flex-col common-wrapper items-center gap-8 py-2">
        <div class="relative w-[11rem] flex flex-col items-center">
          <h3 class="text-white relative z-[10] font-bold ">CLASSES</h3>
          <img class="absolute -top-3  z-[5] " src={redBrush} alt="img" />
        </div>
        <h3 class="text-2xl font-bold">We Offer Top-notch Flexible Classes</h3>
        <div class="relative grid grid-cols-4 grid-flow-row grid-rows-2 gap-4 w-full h-full mb-[6rem]">
          {/* classes */}
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
            bg-bg-class-1 group-hover:scale-[1] group-hover:grayscale-[0]"
            ></div>
          </div>
          {/* class 2 */}
          <div class="class-item-wrap md:col-span-1 group relative">
            <div class="class-item-side group-hover:bg-white duration-[0.4s]">
              <p class="duration-[0.4s] px-3 py-2 rotate-[-30deg] text-white group-hover:text-red-600">
                {allSvg(50).boxing}
              </p>
            </div>
            <div class="class-item-text">
              <p class="text-2xl font-medium">Boxing</p>
              <p class="bg-red-600">Friday: 10:00am-12:00am</p>
            </div>
            <div
              class=" class-item
            bg-bg-class-2 group-hover:scale-[1] group-hover:grayscale-[0]"
            ></div>
          </div>
          {/* class 3 */}
          <div class="class-item-wrap md:col-span-1 group relative">
            <div class="class-item-side group-hover:bg-white duration-[0.4s]">
              <p class="duration-[0.4s] px-3 py-2 rotate-[-30deg] text-white group-hover:text-red-600">
                {allSvg(50).yoga}
              </p>
            </div>
            <div class="class-item-text">
              <p class="text-2xl font-medium">Yoga</p>
              <p class="bg-red-600">Monday: 8:00am-9:00am</p>
            </div>
            <div
              class=" class-item
            bg-bg-class-3 group-hover:scale-[1] group-hover:grayscale-[0]"
            ></div>
          </div>
          {/* class 4 */}
          <div class="class-item-wrap md:col-span-1 group relative">
            <div class="class-item-side group-hover:bg-white duration-[0.4s]">
              <p class="duration-[0.4s] px-3 py-2 rotate-[-30deg] text-white group-hover:text-red-600">
                {allSvg(50).cardio}
              </p>
            </div>
            <div class="class-item-text">
              <p class="text-2xl font-medium">Cardio</p>
              <p class="bg-red-600">Thursday: 3:00pm-5:00pm</p>
            </div>
            <div
              class=" class-item
            bg-bg-class-4 group-hover:scale-[1] group-hover:grayscale-[0]"
            ></div>
          </div>
          {/* class 5 */}
          <div class="class-item-wrap md:col-span-1 group relative">
            <div class="class-item-side group-hover:bg-white duration-[0.4s]">
              <p class="duration-[0.4s] px-3 py-2 rotate-[-30deg] text-white group-hover:text-red-600">
                {allSvg(50).power}
              </p>
            </div>
            <div class="class-item-text">
              <p class="text-2xl font-medium">Power training</p>
              <p class="bg-red-600">Saturday: 12:00am-1:00pm</p>
            </div>
            <div
              class=" class-item
            bg-bg-class-5 group-hover:scale-[1] group-hover:grayscale-[0]"
            ></div>
          </div>
          {/* class 6 */}
          <div class="class-item-wrap md:col-span-2 group relative">
            <div class="class-item-side group-hover:bg-white duration-[0.4s]">
              <p class="duration-[0.4s] px-3 py-2 rotate-[-30deg] text-white group-hover:text-red-600">
                {allSvg(50).cycling}
              </p>
            </div>
            <div class="class-item-text">
              <p class="text-2xl font-medium">Cycling</p>
              <p class="bg-red-600">Tuesday: 6:00pm-7:00pm</p>
            </div>
            <div
              class=" class-item
            bg-bg-class-6 group-hover:scale-[1] group-hover:grayscale-[0]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
