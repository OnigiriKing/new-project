import redBrush from "../img/redBrush.png";
import people1 from "utils/img/people/people1.png"


export default function Testimonials() {
  return (
    <div class="flex justify-center items-center  bg-white  my-6">
      <div class="flex flex-col common-wrapper items-center gap-8 text-center h-[100vh]">
        <div class="mb-4 mt-[5rem] relative w-[13rem] flex flex-col items-center">
          <p class="z-[6] font-bold text-white">TESTIMONIALS</p>
          <img class="absolute -top-[1rem]  z-[5] " src={redBrush} />
        </div>
        <div>
          <div></div>
          <div class="flex relative text-white items-center">
            <div class="relative">
              <div class="flex relative items-center justify-center">
                <img class="w-[20rem] absolute" src={people1}></img>
                <div class="bg-red-700 w-[25rem] h-[37rem]" />
              </div>
            </div>
            <div class="flex flex-col h-[13rem] w-full justify-center bg-black">
              <div class="ml-[3rem]">
                <p>
                  Absolutely thrilled with BKK Gym! Great equipment, friendly
                  staff, and a variety of classes. It's a motivating environment
                  for all fitness levels. Highly recommend for anyone looking to
                  improve their fitness!
                </p>
                <div>
                  <h2 class="mt-[1rem]">Jackson Taylor</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-[4rem] gap-6"></div>
      </div>
    </div>
  );
}
