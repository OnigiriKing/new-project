import redBrush from "utils/img/redBrush.png";
import Article from "./News.Article/Article";
import news from "utils/data/news";

export default function News() {
  const random = Math.floor(Math.random() * 4) + 3;
  return (
    <div class="flex justify-center items-center  bg-white text-black  my-6">
      <div class="flex flex-col common-wrapper items-center gap-8 text-center py-[4rem]">
        <div class="mb-4 mt-[5rem] relative w-[13rem] flex flex-col items-center">
          <p class="z-[6] font-bold text-white">LATEST BLOG</p>
          <img class="absolute -top-[1rem]  z-[5] " src={redBrush} />
        </div>
        <div class="flex flex-col items-center">
          <h3 class="text-3xl font-bold mb-3">Our Recent News</h3>
          <p class="text-gray-600 w-[70%] text-center mb-2">
            Gymat an unknown printer took a galley of type and scrambled make a
            type specimen book.
          </p>
        </div>
        <div class="grid grid-cols-3 gap-4">
          {Object.keys(news)
            .slice(random - 3, random)
            .map((key) => {
              const obj = news[key];
              return <Article date={obj.date} name={obj.name} des={obj.des} />;
            })}
        </div>
      </div>
    </div>
  );
}
