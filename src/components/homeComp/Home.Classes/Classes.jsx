import redBrush from "../img/redBrush.png";

export default function Classes() {
  return (
    <div class="flex center justify-end items-center  bg-white text-white">
      <div class="py-2">
        <div class="relative">
          <h3 class="text-white relative z-[10] ">WHO WE ARE</h3>
          <img class="absolute w-[11rem] -top-2 -left-6 z-[5]" src={redBrush} />
        </div>
        <h3>We Offer Top-notch Flexible Classes</h3>
        <div>
            <div></div>
        </div>
      </div>
    </div>
  );
}
