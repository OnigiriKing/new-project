import { setLogin } from "features/Redux/reducers/loginWindowSlice";
import { useSelector, useDispatch } from "react-redux";
import allSvg from "svg/allSvg";
import { useState } from "react";
import LoginFooter from "./Login.LoginFooter";
import { loginUser, registerUser } from "features/Redux/reducers/userSlice";
import { setLoginStatus } from "features/Redux/reducers/loginStatusSlice";

export default function Login() {
  const loginWindow = useSelector((state) => state.loginWindow);
  const loginStatus = useSelector((state) => state.loginStatus);
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mailTypes = [
    "@gmail.com",
    "@protonmail.com",
    "@hotmail.com",
  ];

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function loginAction(email, password) {
    let loginError = "";
    let passwordError = "";

    if (password.length < 6) {
      passwordError = "Password must be 6+ characters";
    } else {
      passwordError = "";
    }

    if (!mailTypes.some((mailType) => email.includes(mailType))) {
      loginError = "Invalid Email";
      if (password.length >= 6) {
        passwordError = "";
      }
    }

    dispatch(setLoginStatus({ login: loginError, password: passwordError }));

    if (!loginError && !passwordError) {
      if (loginStatus.type === "Sign Up") {
        if (!userInfo.users[email]) {
          dispatch(registerUser({ email, password }));
        } else {
          dispatch(
            setLoginStatus({ login: "This email was already registered" })
          );
        }
      } else if (loginStatus.type === "Sign In") {
        const user = userInfo.users[email];
        if (user && user.password === password) {
          dispatch(loginUser({ email, password }));
        } else {
          dispatch(setLoginStatus({ password: "Incorrect password" }));
        }
      }
    }
  }

  // function loginAction(email, password) {
  //   if (password.length >= 6 && email.includes("@")) {
  //     dispatch(setLoginStatus({ login: "" }));
  //     dispatch(setLoginStatus({ password: "" }));
  //     if (loginStatus.type === "Sign Up") {
  //       if (!userInfo.users[email]) {
  //         dispatch(registerUser({ email, password }));
  //       } else {
  //         dispatch(
  //           setLoginStatus({ login: "this email was already registered" })
  //         );
  //       }
  //     }
  //     if (loginStatus.type === "Sign In") {
  //       if (
  //         userInfo.users[email] &&
  //         userInfo.users[email].password === password
  //       ) {
  //         console.log(userInfo.users[email], "||", userInfo.users);
  //         dispatch(loginUser({ email, password }));
  //       } else {
  //         dispatch(setLoginStatus({ password: "incorrect password" }));
  //       }
  //     }
  //   }
  //    if (!email.includes("@")) {
  //      dispatch(
  //        setLoginStatus({
  //          login: "Invalid Email",
  //        })
  //      );
  //    }
  //   if (password.length <= 6) {
  //     dispatch(setLoginStatus({ password: "Password should be at least 6 Characters or Numbers long" }));
  //   }
  // }

  return (
    <>
      <h3 class="text-black text-center font-bold text-2xl mb-[2rem]">
        {loginStatus.type}
      </h3>
      <div class="flex flex-col gap-[1.5rem]">
        <div class="flex flex-col">
          <label class="text-lg">Email</label>
          <p class="text-red-600">{loginStatus.login}</p>
          <input
            onChange={(e) => handleEmailChange(e)}
            placeholder="BbkGym@gmail.com"
            class="input-style mt-[0.4rem]"
          ></input>
        </div>
        <div class="flex flex-col">
          <label class="text-lg">Password</label>
          <p class="text-red-600">{loginStatus.password}</p>
          <input
            onChange={(e) => handlePasswordChange(e)}
            placeholder="Password"
            class="input-style mt-[0.4rem]"
          ></input>
        </div>
        <button
          class="bg-red-600 text-white py-[.6rem]"
          onClick={() => loginAction(email, password)}
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
