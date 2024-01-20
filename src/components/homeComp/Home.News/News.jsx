
import redBrush from "../img/redBrush.png";
import Article from "./News.Article/Article";

export default function News() {
  return (
    <div class="flex justify-center items-center  bg-white text-black  my-6">
      <div class="flex flex-col common-wrapper items-center gap-8 text-center py-[4rem]">
        <div class="mb-4 mt-[5rem] relative w-[13rem] flex flex-col items-center">
          <p class="z-[6] font-bold text-white">LATEST BLOG</p>
          <img class="absolute -top-[1rem]  z-[5] " src={redBrush} />
        </div>
        <div>
          <h3>Our Recent News</h3>
          <p>
            Gymat an unknown printer took a galley of type and scrambled make a
            type specimen book.
          </p>
        </div>
        <div class="grid grid-cols-3 gap-4">
        <Article />
        </div>
      </div>
    </div>
  );
}
