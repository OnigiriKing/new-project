import { setLogin } from "features/Redux/reducers/loginWindowSlice";
import { useSelector, useDispatch } from "react-redux";
import allSvg from "svg/allSvg";
import { useState } from "react";

export default function Login() {
  const loginWindow = useSelector((state) => state.loginWindow);
  const dispatch = useDispatch();

  const [lognState, setLoginState] = useState("Sign Up");



  function LoginFooter({ state }) {
    if (state === "Sign In") {
      return (
        <div>
          <h3>
            Create a new account:{" "}
            <b
              class="text-red-600 cursor-pointer"
              onClick={() => setLoginState("Sign Up")}
            >
              Sign Up
            </b>
          </h3>
          <h4 class="flex gap-[.3rem] mt-[0.5rem]">
            Test account: (Login: admin, password: admin12)
          </h4>
        </div>
      );
    } else {
      return (
        <div>
          <h3>
            Already have account?{" "}
            <b
              class="text-red-600 cursor-pointer"
              onClick={() => setLoginState("Sign In")}
            >
              Sign In
            </b>
          </h3>
          <h4 class="flex gap-[.3rem] mt-[0.5rem]">
            (Make <p class="text-red-600 cursor-pointer">new Accout</p> or go to
            <p
              class="text-red-600 cursor-pointer"
              onClick={() => setLoginState("Sign In")}
            >
              Sign In
            </p>
            Page for Test Account)
          </h4>
        </div>
      );
    }
  }

  return (
    <div
      class={`w-[30rem] flex flex-col items-center absolute h-[100vh] bg-white duration-[.5s] ease-in-out z-[100] ${
        loginWindow ? "right-0" : "right-[-100%]"
      } `}
    >
      <div
        class="cursor-pointer hover:text-red-600 duration-[.3s] ease-in-out text-black absolute left-[1.5rem] top-[1.5rem]"
        onClick={() => dispatch(setLogin(false))}
      >
        {allSvg(35).close}
      </div>
      <div class=" pt-[6rem] text-black w-[90%]">
        <h3 class="text-black text-center font-bold text-2xl mb-[2rem]">
          {lognState}
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
            <input
              placeholder="Password"
              class="input-style mt-[0.4rem]"
            ></input>
          </div>
          <button class="bg-red-600 text-white py-[.6rem]">{lognState}</button>
          <div class="">
          <LoginFooter state={lognState} />
          </div>
        </div>
      </div>
    </div>
  );
}
