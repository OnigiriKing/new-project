
import redBrush from "utils/img/redBrush.png";
import prices from "utils/data/prices";
import Course from "./Chart.Course/Course";

export default function Chart() {



  return (
    <div class="flex justify-center items-center  bg-white  my-6">
      <div class="flex flex-col common-wrapper items-center gap-8 text-center py-2">
        <div class="mb-4 mt-[5rem] relative w-[13rem] flex flex-col items-center">
          <p class="z-[6] font-bold text-white">PRICING CHART</p>
          <img class="absolute -top-[1rem]  z-[5] " src={redBrush} alt="img" />
        </div>
        <h3>Your Pricing Plan</h3>
        <p>
          Join Gymat today and start your journey to a healthier, stronger you.
        </p>
        {/* Price */}
        <div class="gap-10 grid grid-cols-3 items-center">
          {Object.keys(prices).map((key) => {
            const price = prices[key];

            return (
              <Course
                img={price.img}
                level={price.level}
                price={price.price}
                des={price.des}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
