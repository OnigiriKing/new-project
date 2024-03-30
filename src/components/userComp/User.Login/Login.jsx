import { setLogin } from "features/Redux/reducers/loginWindowSlice";
import { useSelector, useDispatch } from "react-redux";
import allSvg from "svg/allSvg";
import { useState } from "react";
import LoginFooter from "./Login.LoginFooter";
import { loginUser, registerUser } from "features/Redux/reducers/userSlice";
import loginAction from "./Login.loginAction";

export default function Login() {
  const loginWindow = useSelector((state) => state.loginWindow);
  const loginStatus = useSelector((state) => state.loginStatus);
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();



  return (
    <>
      <h3 class="text-black text-center font-bold text-2xl mb-[2rem]">
        {loginStatus.type}
      </h3>
      <div class="flex flex-col gap-[1.5rem]">
        <div class="flex flex-col">
          <label class="text-lg">Email</label>
          <input
            placeholder="BbkGym@gmail.com"
            class="input-style mt-[0.4rem]"
          ></input>
        </div>
        <div class="flex flex-col">
          <label class="text-lg">Password</label>
          <input placeholder="Password" class="input-style mt-[0.4rem]"></input>
        </div>
        <button
          class="bg-red-600 text-white py-[.6rem]"
          onClick={() => loginAction()}
        >
          {loginStatus.type}
        </button>
        <div class="">
          <LoginFooter />
        </div>
      </div>
    </>
  );
}
