import TopComp from "components/topComp/TopComp";
import allSvg from "svg/allSvg";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div class="w-full flex flex-col items-center">
      <TopComp des="Blog" />
      <div class="common-wrapper pt-[4rem] flex">
        <div class="w-[70%]"></div>
        <div class="w-[30%]">
          <div class="flex">
            <input
              placeholder="Search..."
              class="px-[.7rem] py-[1rem] w-[20rem] border-[1px] border-gray-200 rounded-md"
            ></input>
            <button>search</button>
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
