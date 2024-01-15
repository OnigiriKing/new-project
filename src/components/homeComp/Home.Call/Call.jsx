import { Link } from "react-router-dom";
import redBrush from "../img/redBrush.png";

export default function Call() {
  return (
    <div class="flex justify-center items-center  bg-white  my-6">
      <div class="flex flex-col common-wrapper items-center gap-8 text-center py-2">
        <div>
          <h3>Need a Fitness Trainer?</h3>
          <h3>
            <b>Call:</b>+66-000-000
          </h3>
          <Link class="button-class">PURCHASE NOW</Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}
