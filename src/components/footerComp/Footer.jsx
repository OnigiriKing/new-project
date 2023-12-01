import logo from "utils/img/logo.png";

export default function Footer() {
  return (
    <div class="page-class">
      <div class="flex justify-between w-full max-w-[60rem] items-center mx-[2rem] py-[4rem]">
        <div class="flex flex-col w-[20rem] gap-4 items-center text-center">
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
          <h2>Our Classes</h2>
          <ul class="flex flex-col gap-4">
            <li class="cursor-pointer">Fitness Classes</li>
            <li class="cursor-pointer">Groove Cardio</li>
            <li class="cursor-pointer">Core Harmony</li>
            <li class="cursor-pointer">Zen Flex</li>
            <li class="cursor-pointer">Strength & Sculpt</li>
          </ul>
        </div>
        <div>
          <h2>Working Hours</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
