import { blogPost } from "utils/data/blogData";
import allSvg from "svg/allSvg";

export default function Posts() {
  return (
    <div class="flex flex-col gap-[2.5rem] w-[90%]">
      {Object.keys(blogPost).map((el) => {
        const post = blogPost[el];
        return (
          <div class="flex flex-col gap-[1rem]">
            <div class="h-[25rem]">
              <img class="h-full object-cover w-full" src={post.img}></img>
            </div>
            <p class="text-gray-600 flex items-center gap-[.2rem]">
              <i class="text-red-600 mr-[.1rem]">{allSvg(20).post}</i> By
              <b>{post.author}</b> | {post.date} | {post.type}
            </p>
            <h3 class="text-3xl font-bold">{post.name}</h3>
            <p class="text-gray-600">{post.des}</p>
            <button class="button-class mt-[1rem]">
              PURCHASE NOW {allSvg(20).arrow}
            </button>
          </div>
        );
      })}
    </div>
  );
}
