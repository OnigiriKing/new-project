import TopComp from "components/topComp/TopComp";
import allSvg from "svg/allSvg";
import discount from "utils/img/blogImg/test.jpeg";
import { blogCat, tagsList, blogPost } from "utils/data/blogData";

export default function Blog() {

  return (
    <div class="w-full flex flex-col items-center">
      <TopComp des="Blog" />
      <div class="common-wrapper pt-[4rem] flex">
        <div class="w-[70%]"></div>
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
          <div class="bg-gray-100 p-[2rem]">
            <h3 class="mb-[1rem] contact-page-header text-[1.2rem]">
              Categories
            </h3>
            {Object.keys(blogCat).map((el) => {
              const category = blogCat[el];

              return (
                <div class="flex justify-between mt-[1rem] pb-[1rem] border-b-[1px] text-gray-500 border-gray-300 cursor-pointer hover:text-red-600 duration-[.4s]">
                  <h3 class="flex gap-[.6rem]">
                    <p class="rotate-90">{allSvg(14).arrowSmall}</p>
                    {category.name}
                  </h3>
                  <h4>({category.number})</h4>
                </div>
              );
            })}
          </div>
          {/* posts */}
          <div class="bg-gray-100 p-[2rem] ">
            <h3 class="mb-[1rem] contact-page-header text-[1.2rem]">
              Recent Posts
            </h3>
            <div class="flex flex-wrap gap-[.5rem] ">
              {tagsList.map((el) => {
                return (
                  <h3 class="cursor-pointer hover:text-red-600 text-gray-600 duration-[.4s] bg-white px-[.4rem] py-[.2rem] ">
                    {"#"+el}
                  </h3>
                );
              })}
            </div>
          </div>
          {/* tags */}
          <div class="bg-gray-100 p-[2rem] ">
            <h3 class="mb-[1rem] contact-page-header text-[1.2rem]">
              Popular Tags
            </h3>
            <div class="flex flex-wrap gap-[.5rem] ">
              {tagsList.map((el) => {
                return (
                  <h3 class="cursor-pointer hover:text-red-600 text-gray-600 duration-[.4s] bg-white px-[.4rem] py-[.2rem] ">
                    {el}
                  </h3>
                );
              })}
            </div>
          </div>
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
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
