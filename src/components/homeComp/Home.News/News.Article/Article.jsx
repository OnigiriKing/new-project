import { Link } from "react-router-dom";
import allSvg from "svg/allSvg";

export default function Article({date, name, des}) {
  return (
    <div class="flex justify-center items-center shadow-lg">
      <div class="">
        <div>date</div>
        <h3>name</h3>
        <p>des</p>
        <Link class="button-class">READ MORE {allSvg(20).arrow}</Link>
      </div>
    </div>
  );
}
