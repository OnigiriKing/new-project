import redBrush from "../img/redBrush.png";
import trainer1 from "./img/trainer1.png";
import trainer2 from "./img/trainer2.png";
import trainer3 from "./img/trainer3.png";
import { Coach } from "./Trainers.Coach";

export default function Trainers() {
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
