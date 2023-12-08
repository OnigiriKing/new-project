import redBrush from "../img/redBrush.png";

export default function Classes() {
  return (
    <div class="flex center justify-center items-center  bg-white">
      <div class="flex flex-col w-full max-w-[75rem] py-4 items-center gap-8 mx-4">
        <div class="relative w-[11rem] flex flex-col items-center">
          <h3 class="text-white relative z-[10] ">WHO WE ARE</h3>
          <img class="absolute -top-3  z-[5] " src={redBrush} />
        </div>
        <h3>We Offer Top-notch Flexible Classes</h3>
        <div class="relative grid grid-cols-4 grid-flow-row grid-rows-2 gap-4 w-full h-full">
          <div class=" md:col-span-2 h-[20rem]">
            <div class="absolute"></div>
            <div class="bg-bg-class1 h-full w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
