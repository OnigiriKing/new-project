import allSvg from "svg/allSvg";


export default function Welcome() {
  return (
    <div class="flex center h-[107vh] justify-end items-center  bg-black pt-24 text-white">
      <div class="flex flex-col common-wrapper items-center gap-8 mx-4">
        <div>
          <h3></h3>
          <Link class="self-start ml-10 font-medium text-white bg-gray-700 px-8 py-4 group hover:bg-red-600 duration-500 flex items-center gap-2">
            JOIN US {allSvg(20).arrow}
          </Link>
        </div>
        <div>
          <div></div>
          <div>
            <h4>WHY CHOOSE US</h4>
            <h3>We Can Give A Shape Of Your Body Here!</h3>
            <p>
              At Gymate, we are dedicated to helping you achieve the body of
              your dreams. Our expert trainers and nutritionists will work with
              you to create a personalized fitness and nutrition plan that helps
              you reach your specific goals.
            </p>
            <div>
              <div>
                <h5></h5>
                <div></div>
              </div>
              <Link class="self-start ml-10 font-medium text-black bg-white px-8 py-4 group hover:bg-red-600 duration-500 flex items-center gap-2">
                OUR CLASSES {allSvg(20).arrow}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
