import TopComp from "components/topComp/TopComp";
import allSvg from "svg/allSvg";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div class="w-full flex flex-col items-center">
      <TopComp des="Blog" />
      <div class="common-wrapper pt-[4rem]">
        <div></div>
        <div>
          <div>
            <input></input>
            <button></button>
          </div>
          <div>Categories</div>
          <div>Recent Posts</div>
          <div>Tags</div>
          <div>ad</div>
        </div>
      </div>
    </div>
  );
}
