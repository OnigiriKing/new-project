import { blogCat } from "utils/data/blogData";
import allSvg from "svg/allSvg";

export default function Categories() {

    return (
      <div class="bg-gray-100 p-[2rem]">
        <h3 class="mb-[1rem] contact-page-header text-[1.2rem]">Categories</h3>
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
    );
}