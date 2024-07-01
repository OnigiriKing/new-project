import { Link } from "react-router-dom";
import ropes from "utils/img/ropes.png"

export default function Call() {
  return (
    <div class="flex justify-center items-center  bg-black text-white  my-6">
      <div class="flex common-wrapper items-center text-center py-[4rem] h-[20rem] relative">
        <div class="z-10 flex flex-col gap-[1rem] items-start font-bold w-[70%]">
          <h3 class="text-3xl">Need a Fitness Trainer?</h3>
          <h3 class="text-2xl flex gap-1">
            <b class="text-red-600">Call:</b>+66-000-000
          </h3>
          <Link class="button-class mt-4">PURCHASE NOW</Link>
        </div>
        <div class="overflow-hidden h-[20rem] w-[55rem] absolute -right-[9rem]">
          <img class="relative bottom-[19rem]" src={ropes} alt="img"></img>
        </div>
      </div>
    </div>
  );
}
