import { Link } from "react-router-dom";

export default function Call() {
  return (
    <div class="flex justify-center items-center  bg-black text-white  my-6">
      <div class="flex common-wrapper items-center gap-[1rem] text-center py-[4rem]">
        <div class="z-10 flex flex-col gap-[1rem] items-start font-bold">
          <h3 class="text-3xl">Need a Fitness Trainer?</h3>
          <h3 class="text-2xl flex gap-1">
            <b class="text-red-600">Call:</b>+66-000-000
          </h3>
          <Link class="button-class mt-4">PURCHASE NOW</Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}
