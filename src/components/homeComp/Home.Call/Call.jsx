import { Link } from "react-router-dom";

export default function Call() {
  return (
    <div class="flex justify-center items-center  bg-black text-white  my-6">
      <div class="flex common-wrapper items-center gap-8 text-center py-[4rem]">
        <div>
          <h3>Need a Fitness Trainer?</h3>
          <h3>
            <b>Call:</b>+66-000-000
          </h3>
          <Link class="button-class">PURCHASE NOW</Link>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}
