import TopComp from "components/topComp/TopComp";
import allSvg from "svg/allSvg";
import discount from "utils/img/blogImg/add.jpeg";
import Categories from "./Blog.Categories/Categories";
import Recent from "./Blog.Recent/Recent";
import Tags from "./Blog.Tags/Tags";
import Posts from "./Blog.Posts/Posts";

export default function Blog() {
  return (
    <div class="w-full flex flex-col items-center">
      <TopComp des="Blog" />
      <div class="common-wrapper pt-[4rem] flex">
        <div class="w-[70%]">
          <Posts />
        </div>
        <div class="w-[30%] flex flex-col gap-[2.5rem]">
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
          <Categories />
          <Recent />
          <Tags />
          <div class="flex w-full h-[30rem] bg-gray-100 relative">
            <div class="w-[11rem] flex flex-col text-center mt-[3rem] text-white font-bold z-20">
              <h3 class="bg-white text-black mb-[1rem] text-3xl rounded-br-full p-[.5rem]">
                BKKgym
              </h3>
              <h2 class="mb-[.5rem] text-4xl">20%</h2>
              <h4>Big discount</h4>
            </div>
            <img
              src={discount}
              class="absolute object-center object-cover w-full h-full z-10"
              alt="img"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
