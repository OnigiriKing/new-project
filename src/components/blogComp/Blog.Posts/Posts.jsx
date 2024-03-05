import { blogPost } from "utils/data/blogData";
import allSvg from "svg/allSvg";

export default function Posts() {
  return (
    <div>
      {Object.keys(blogPost).map((el) => {
        const post = blogPost[el];
        return (
          <div class="h-[8rem] flex items-center gap-[1rem]">
            <img src={post.img}></img>
            <p>
              By {post.author} | {post.date} | {post.date}
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
