import allSvg from "svg/allSvg";
import redBrush from "utils/img/redBrush.png";
import reviews from "utils/data/reviews";
import { useDispatch, useSelector } from "react-redux";
import { next, prev } from "features/Redux/reducers/reviewSlice";



export default function Testimonials() {

  const dispatch = useDispatch()
  const review = useSelector((state) => state.review);

  
  return (
    <div class="flex justify-center items-center  bg-white  my-6">
      <div class="flex flex-col common-wrapper items-center gap-8  h-[100vh] py-2">
        <div class="mb-4 mt-[5rem] relative w-[13rem] flex flex-col items-center">
          <p class="z-[6] font-bold text-white">TESTIMONIALS</p>
          <img class="absolute -top-[1rem]  z-[5] " src={redBrush} />
        </div>
        <div class="w-[85%]">
          <div></div>
          <div class="flex relative text-white items-end">
            <div>
              <div class="flex relative items-center justify-center left-4">
                <img
                  class={reviews["person" + review].position}
                  src={reviews["person" + review].img}
                ></img>
                <div class=" w-[20rem] h-[30rem]  bg-red-800 rounded-tr-[15rem]" />
              </div>
            </div>
            <div class="flex flex-col h-[20rem] w-full justify-center bg-black relative">
              <div class="mx-[7rem]">
                {allSvg(40).quotes}
                <p>{`"${reviews["person" + review].text}"`}</p>
                <div>
                  <h2 class="mt-[1rem] font-bold">
                    {reviews["person" + review].name}
                  </h2>
                </div>
                <div class=" flex absolute right-[4rem]  bottom-[2rem] justify-end gap-2 text-black">
                  <button
                    class="rotate-180 p-2 bg-white hover:bg-red-600 hover:text-white duration-[.3s]"
                    onClick={() => dispatch(prev())}
                  >
                    {allSvg(20).arrow}
                  </button>
                  <button
                    class="p-2 bg-white hover:bg-red-600 hover:text-white duration-[.3s]"
                    onClick={() => dispatch(next())}
                  >
                    {allSvg(20).arrow}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-[4rem] gap-6"></div>
      </div>
    </div>
  );
}
