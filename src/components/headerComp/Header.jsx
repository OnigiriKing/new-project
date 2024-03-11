import { Link } from "react-router-dom";
import logo from "utils/img/logo.png";
import allSvg from "svg/allSvg";
import React from "react";
import Login from "./Header.Login/Login";

export default function Header() {
  const [scrolled, setScroll] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 80) {
        setScroll(true);
        console.log(scrolled);
      } else {
        setScroll(false);
        console.log(scrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        class={`fixed flex justify-center w-full top-0 ${
          scrolled ? "bg-transparent" : "bg-black"
        }  text-white z-50`}
      >
        <Login />
        <div class="justify-between  common-wrapper items-center flex py-2">
          <Link to="/">
            <img src={logo} alt="logo" class="w-20" />
          </Link>
          <div class="flex gap-6">
            <Link to="/" class="duration-500 hover:text-red-600 ">
              Home
            </Link>
            <Link to="/schedule" class="duration-500 hover:text-red-600">
              Schedule
            </Link>
            <Link to="/blog" class="duration-500 hover:text-red-600">
              Blog
            </Link>
            <Link to="/classes" class="duration-500 hover:text-red-600">
              Classes
            </Link>
            <Link to="/contact" class="duration-500 hover:text-red-600">
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
    </div>
  );
}
