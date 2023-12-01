import logo from "utils/img/logo.png";

export default function Footer() {
  return (
    <div class="page-class">
      <div class="flex justify-between w-full max-w-[60rem] items-center mx-[2rem] py-[4rem]">
        <div class="flex flex-col w-[20rem] gap-4 items-center text-center text-gray-500">
          <img src={logo} class="w-20 flex" />
          <div>
            Revitalize your health journey on our one-year anniversary! Unleash
            your full fitness potential with our tailored program.
          </div>
          <div></div>
          <div class="flex">
            <h3 class=" pr-2 border-r-[1.5px] border-r-[#000] cursor-pointer  transition-colors duration-500  hover:text-red-600">
              Privacy Policy
            </h3>
            <h3 class="pl-2">© 2023 BKK gym</h3>
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <h2 class=" text-2xl font-bold">Our Classes</h2>
          <ul class="flex flex-col gap-4 text-gray-500">
            <li class="cursor-pointer  transition-colors duration-500  hover:text-red-600">
              Fitness Classes
            </li>
            <li class="cursor-pointer  transition-colors duration-500  hover:text-red-600">
              Groove Cardio
            </li>
            <li class="cursor-pointer  transition-colors duration-500  hover:text-red-600">
              Core Harmony
            </li>
            <li class="cursor-pointer  transition-colors duration-500  hover:text-red-600">
              Zen Flex
            </li>
            <li class="cursor-pointer  transition-colors duration-500  hover:text-red-600">
              Strength & Sculpt
            </li>
          </ul>
        </div>
        <div class="flex gap-4 flex-col">
          <h2 class=" text-2xl font-bold">Working Hours</h2>
          <ul class="text-gray-500 flex flex-col gap-4">
            <li class="font-extrabold">Monday - Friday:</li>
            <li class="">7:00am - 23:00pm</li>
            <li class="font-extrabold">Saturday:</li>
            <li class="">8:00am - 21:00pm</li>
            <li class="font-extrabold">Sunday - Closed</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
