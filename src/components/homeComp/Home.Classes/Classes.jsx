import redBrush from "../img/redBrush.png";

export default function Classes() {
  return (
    <div class="flex center justify-center items-center  bg-white text-white">
      <div class="flex flex-col w-full max-w-[75rem] py-4 items-center">
        <div class="relative w-[11rem] flex flex-col items-center">
          <h3 class="text-white relative z-[10] ">WHO WE ARE</h3>
          <img class="absolute -top-3  z-[5] " src={redBrush} />
        </div>
        <h3>We Offer Top-notch Flexible Classes</h3>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
