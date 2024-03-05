import { blogPost } from "utils/data/blogData";
import allSvg from "svg/allSvg";

export default function Posts() {
  return (
    <div>
      {Object.keys(blogPost).map((el) => {
        const post = blogPost[el];
        return (
          <div class="flex flex-col gap-[1rem]">
            <div class="h-[30rem]">
              <img class="h-full object-fill" src={post.img}></img>
            </div>
            <p>
              By <b>{post.author}</b> | {post.date} | {post.type}
            </p>
            <h3>{post.name}</h3>
            <p>{post.des}</p>
            <button>PURCHASE NOW {allSvg(20).arrow}</button>
          </div>
        );
      })}
    </div>
  );
}
