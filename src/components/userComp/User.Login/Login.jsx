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
  const [userName, setUserName] = useState("");

  const mailTypes = [
    "@gmail.com",
    "@protonmail.com",
    "@hotmail.com",
    "@bbkmail.com",
  ];

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  function loginAction(userName, email, password) {
    let userNameError = "";
    let loginError = "";
    let passwordError = "";
    
    if (loginStatus.type === "Sign Up") {
      if (userName.length < 4) {
        userNameError = "Name must be 4+ characters";
      } else {
        passwordError = "";
      }
    }

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

    dispatch(
      setLoginStatus({
        login: loginError,
        password: passwordError,
        userName: userNameError,
      })
    );

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
        } if (user && user.password !== password) {
          dispatch(setLoginStatus({ password: "Incorrect password" }));
        }
        if (!user) {
          dispatch(setLoginStatus({ login: "This account does not exist" }));
        }
      }
    }
  }


  return (
    <>
      <h3 class="text-black text-center font-bold text-2xl mb-[2rem]">
        {loginStatus.type}
      </h3>
      <div class="flex flex-col gap-[1.5rem]">
        {loginStatus.type === "Sign Up" ? (
          <div class="flex flex-col">
            <label class="text-lg">Name</label>
            <p class="text-red-600">{loginStatus.userName}</p>
            <input
              onChange={(e) => handleUserNameChange(e)}
              placeholder="Gym User"
              class="input-style mt-[0.4rem]"
            ></input>
          </div>
        ) : (
          ""
        )}
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
          onClick={() => loginAction(userName, email, password)}
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
