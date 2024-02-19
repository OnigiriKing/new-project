import allSvg from "svg/allSvg";

export default function Links() {

    return (
      <div class="flex gap-4">
        <div class="group cursor-pointer bg-gray-200 hover:bg-red-600 hover:text-[#fff] p-2 rounded-full duration-500">
          {allSvg(20).inst}
        </div>
        <div class="group cursor-pointer bg-gray-200 hover:bg-red-600 hover:text-[#fff] p-2 rounded-full duration-500">
          {allSvg(20).pint}
        </div>
        <div class="group cursor-pointer bg-gray-200 hover:bg-red-600 hover:text-[#fff] p-2 rounded-full duration-500">
          {allSvg(20).twitter2}
        </div>
        <div class="group cursor-pointer bg-gray-200 hover:bg-red-600 hover:text-[#fff] p-2 rounded-full duration-500">
          {allSvg(20).youTube}
        </div>
      </div>
    );
}