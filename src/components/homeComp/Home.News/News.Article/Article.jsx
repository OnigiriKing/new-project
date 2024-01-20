import { Link } from "react-router-dom";
import allSvg from "svg/allSvg";

export default function Article({date, name, des}) {
  return (
    <div class="flex justify-center items-center shadow-lg">
      <div class="flex flex-col gap-4 p-[4rem] items-start">
        <div class="border-[1px] border-black p-1 px-2 rounded-full font-bold">19.01.2024</div>
        <h3>name</h3>
        <p>des</p>
        <Link class="button-class">READ MORE {allSvg(20).arrow}</Link>
      </div>
    </div>
  );
}
