import TopComp from "components/topComp/TopComp";
import allSvg from "svg/allSvg";

export default function Blog() {
  return (
    <div class="w-full flex flex-col items-center">
      <TopComp des="Blog" />
      <div class="common-wrapper pt-[4rem] flex">
        <div class="w-[70%]"></div>
        <div class="w-[30%]">
          <div class="flex">
            <input
              type="search"
              placeholder="Search..."
              class="px-[1.2rem] py-[1rem] w-full border-[1px] border-gray-200 rounded-tl-md rounded-bl-md outline-none"
            ></input>
            <button class="flex items-center bg-red-600 text-white px-[.7rem] rounded-tr-md rounded-br-md">
              {allSvg(35).serach}
            </button>
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
