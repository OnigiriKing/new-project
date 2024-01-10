import redBrush from "../img/redBrush.png";

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
        <div class="flex items-center">
            <div></div>
        </div>
      </div>
    </div>
  );
}
