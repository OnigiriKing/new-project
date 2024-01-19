import allSvg from "svg/allSvg";

export function Coach({ img, name, des, width }) {
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
