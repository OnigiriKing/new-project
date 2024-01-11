import { Link } from "react-router-dom";
import allSvg from "svg/allSvg";

export function Course({ img, Level, price, des }) {
  return (
    <div class="class-item-wrap md:col-span-1 group relative">
      <img
        src={img}
        class=" class-item
            bg-bg-class-4 group-hover:grayscale-[0]"
      ></img>
      <h3>{Level}</h3>
      <div>
        $ <b>{price}</b> p/m
      </div>
      <div class="class-item-text">
        <p>{des}</p>
      </div>
      <Link class="button-class">PURCHASE NOW {allSvg(20).arrow}</Link>
    </div>
  );
}
