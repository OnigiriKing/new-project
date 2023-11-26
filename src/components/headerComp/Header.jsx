import { Link } from "react-router-dom";
import logo from "utils/img/logo.png";
import allSvg from "svg/allSvg";

export default function Header() {
  return (
    <div class="fixed flex justify-center w-full top-0 bg-black opacity-95  text-white">
      <div class="flex items-center w-full mx-16 justify-between py-2">
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
        <div class="flex gap-3">
          <Link>{allSvg(25).user}</Link>
          <div>{allSvg(25).about}</div>
          <Link class="ml-4">
            <div></div>
            <h3>JOIN CLASS NOW</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
