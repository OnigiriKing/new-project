import { Link } from "react-router-dom";
import logo from "utils/img/logo.png"

export default function Header() {
  return (
    <div class="fixed flex justify-center w-full top-0 bg-black opacity-95  text-white">
      <div class="flex items-center w-full max-w-7xl mx-20 justify-between py-8">
        <img src={logo} alt="logo" class="w-24"/>
        <div class="flex gap-6">
          <a href="" class="hover:text-red-600">
            Home
          </a>
          <a href="" class="hover:text-red-600">
            About
          </a>
          <a href="" class="hover:text-red-600">
            Gallary
          </a>
          <a href="" class="hover:text-red-600">
            Schedule
          </a>
          <a href="" class="hover:text-red-600">
            Blog
          </a>
          <a href="" class="hover:text-red-600">
            Pricing
          </a>
          <a href="" class="hover:text-red-600">
            Classes
          </a>
          <a href="" class="hover:text-red-600">
            Contact
          </a>
        </div>
        <div>
          <Link></Link>
          <div></div>
          <Link>
            <div></div>
            <h3>JOIN CLASS NOW</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
