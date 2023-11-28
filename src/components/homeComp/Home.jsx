import sportsMan from "./img/sportsMan.png"

export default function Home() {
  return (
    <div class="flex center h-screen justify-end items-center  bg-black pt-24 text-white">
      <div>
        <img
          src={sportsMan}
          class="w-[30rem] absolute bottom-0 left-[10rem] z-[5]"
        />
        <div class="flex gap-16 mr-[10rem] items-center">
          <div class="z-[10] flex flex-col gap-10">
            <div>FIND YOUR ENERGY</div>
            <div>
              <h2>MAKE YOUR BODY</h2>
              <h2>FIT & PERFECT</h2>
            </div>
            <div>Our classes</div>
          </div>
          <div class="flex flex-col gap-7">
            <h3 class=" -rotate-[90deg]">SHARE</h3>
            <div class=" w-7 h-10 border-red-500 border-r-2"></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
