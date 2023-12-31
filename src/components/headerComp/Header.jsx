import { Link } from "react-router-dom";
import logo from "utils/img/logo.png";
import allSvg from "svg/allSvg";

export default function Header() {
  return (
    <div class="fixed flex justify-center w-full top-0 bg-black opacity-95  text-white z-50">
      <div class="justify-between  common-wrapper items-center flex py-1">
        <img src={logo} alt="logo" class="w-20" />
        <div class="flex gap-6">
          <Link href="" class="duration-500 hover:text-red-600 ">
            Home
          </Link>
          <Link href="" class="duration-500 hover:text-red-600">
            About
          </Link>
          <Link href="" class="duration-500 hover:text-red-600">
            Gallary
          </Link>
          <Link href="" class="duration-500 hover:text-red-600">
            Schedule
          </Link>
          <Link href="" class="duration-500 hover:text-red-600">
            Blog
          </Link>
          <Link href="" class="duration-500 hover:text-red-600">
            Pricing
          </Link>
          <Link href="" class="duration-500 hover:text-red-600">
            Classes
          </Link>
          <Link href="" class="duration-500 hover:text-red-600">
            Contact
          </Link>
        </div>
        <div class="flex gap-3 items-center">
          <Link class="group">{allSvg(25).user}</Link>
          <div class="group cursor-pointer">{allSvg(25).about}</div>
          <Link class="group ml-4 flex gap-2 items-center p-[.4rem] border-[1px] border-solid border-[rgb(255,255,255,0.6)]">
            <div class="duration-0 group-hover:rotate-180 group-hover:duration-500">
              {allSvg(30).add}
            </div>
            <p class="text-[.9rem]">JOIN CLASS NOW</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
