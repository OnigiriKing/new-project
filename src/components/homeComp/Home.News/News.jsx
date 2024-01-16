import { Link } from "react-router-dom";

export default function News() {
  return (
    <div class="flex justify-center items-center  bg-black text-white  my-6">
      <div class="flex common-wrapper items-center gap-8 text-center py-[4rem]">
        <div class="mb-4 mt-[5rem] relative w-[13rem] flex flex-col items-center">
          <p class="z-[6] font-bold text-white">LATEST BLOG</p>
          <img class="absolute -top-[1rem]  z-[5] " src={redBrush} />
        </div>
      </div>
    </div>
  );
}
