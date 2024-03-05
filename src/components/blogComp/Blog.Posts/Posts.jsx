import { blogPost } from "utils/data/blogData";

export default function Posts() {
  return (
    <div>
      {Object.keys(blogPost).map((el) => {
        const post = blogPost[el];
        return (
          <div class="h-[8rem] flex items-center gap-[1rem]">
            <img></img>
            <p></p>
            <h3></h3>
            <p></p>
            <button></button>
          </div>
        );
      })}
    </div>
  );
}
