import { tagsList } from "utils/data/blogData";

export default function Tags() {
  return (
    <div class="bg-gray-100 p-[2rem] ">
      <h3 class="mb-[1rem] contact-page-header text-[1.2rem]">Popular Tags</h3>
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
  );
}
