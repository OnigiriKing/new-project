import { blogPost } from "utils/data/blogData";

export default function Posts() {
  return (
    <div class="bg-gray-100 p-[2rem] ">
      <h3 class="mb-[1rem] contact-page-header text-[1.2rem]">Recent Posts</h3>
      <div class="flex flex-wrap gap-[.5rem] ">
        {Object.keys(blogPost).map((el) => {
          const post = blogPost[el];
          return (
            <div class="h-[8rem] flex items-center gap-[1rem]">
              <div class="w-[5rem] cursor-pointer">
                <img src={post.img}></img>
              </div>
              <div class="flex flex-col gap-[.5rem] h-full justify-center">
                <p class="text-gray-600">{post.date}</p>
                <h3 class="cursor-pointer hover:text-red-600 duration-[.4s]  font-bold">
                  {post.name}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
