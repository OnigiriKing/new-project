import allSvg from "svg/allSvg";
import { Link } from "react-router-dom";
import redBrush from "utils/img/redBrush.png";

export default function ChooseUs() {
  return (
    <div class="flex center justify-end items-center  bg-black pt-24 text-white relative">
      <div class="flex flex-col common-wrapper items-center gap-8 mx-4 h-full py-2">
        <div class="flex gap-10 items-center py-4 absolute -top-[3rem] bg-red-600 left-0 z-10 w-[65rem] h-[8rem] rounded-br-full">
          <h3 class="font-bold text-4xl w-[35rem] ml-[10rem]">
            We Are Always Providing Best Fitness Service For You
          </h3>
          <Link class="button-class-light">JOIN US {allSvg(20).arrow}</Link>
        </div>
        <div class="flex gap-10 justify-center items-center mt-[6rem] mb-[4rem]">
          <div class="">
            <iframe
              width="520"
              height="315"
              src="https://www.youtube.com/embed/ruX4Le0kBng?si=pB-mbMkLmWOISZqg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div class="flex flex-col w-[40%] gap-4">
            <div class="mb-4 relative w-[13rem] flex flex-col items-center">
              <p class="z-[6] font-bold">WHY CHOOSE US</p>
              <img class="absolute -top-[1rem]  z-[5] " src={redBrush} />
            </div>
            <h3 class="text-3xl font-bold">
              We Can Give A Shape Of Your Body Here!
            </h3>
            <p class=" text-gray-400">
              At Gymate, we are dedicated to helping you achieve the body of
              your dreams. Our expert trainers and nutritionists will work with
              you to create a personalized fitness and nutrition plan that helps
              you reach your specific goals.
            </p>
            <div class="z-10">
              <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center gap-4">
                  <div class="bg-gray-800 hover:bg-red-600 duration-[0.5s] p-2 rounded-full">
                    {allSvg(35).muscle}
                  </div>
                  <h5 class="font-bold text-lg">Free Power Training</h5>
                </div>
                <div class="flex items-center gap-4">
                  <div class="bg-gray-800 hover:bg-red-600 duration-[0.5s] p-2 rounded-full">
                    {allSvg(35).cycling}
                  </div>
                  <h5 class="font-bold text-lg">Modern Gym Equipments</h5>
                </div>
                <div class="flex items-center gap-4">
                  <div class="bg-gray-800 hover:bg-red-600 duration-[0.5s] p-2 rounded-full">
                    {allSvg(35).gymBag}
                  </div>
                  <h5 class="font-bold text-lg">Free Gym Bag</h5>
                </div>
                <div class="flex items-center gap-4">
                  <div class="bg-gray-800 hover:bg-red-600 duration-[0.5s] p-2 rounded-full">
                    {allSvg(35).bottle}
                  </div>
                  <h5 class="font-bold text-lg">Fresh Bottle Watter</h5>
                </div>
              </div>
              <Link class="button-class mt-[2rem]">
                OUR CLASSES {allSvg(20).arrow}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
