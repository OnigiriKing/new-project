import { setLogin } from "features/Redux/reducers/loginWindowSlice";
import { useSelector, useDispatch } from "react-redux";
import allSvg from "svg/allSvg";
import { useState } from "react";
import LoginFooter from "./Login.LoginFooter";
import { loginUser, registerUser } from "features/Redux/reducers/userSlice";

export default function Login() {
  const loginWindow = useSelector((state) => state.loginWindow);
  const dispatch = useDispatch();

  const [loginState, setLoginState] = useState("Sign Up");

function loginAction(email, password) {
  if (loginState == "Sign Up") {
    dispatch(registerUser({ email, password }));
  } else {
    dispatch(loginUser({ email, password }));
  }
}


  return (
    <>
      <h3 class="text-black text-center font-bold text-2xl mb-[2rem]">
        {loginState}
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
        <button class="bg-red-600 text-white py-[.6rem]" onClick={()=>loginAction()}></button>
        <div class="">
          <LoginFooter state={loginState} setLoginState={setLoginState} />
        </div>
      </div>
    </>
  );
}
