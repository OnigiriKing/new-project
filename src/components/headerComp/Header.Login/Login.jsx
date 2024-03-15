import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  const openState = useSelector((state) => state.openState)
  
  return (
    <div
      class={`w-[30rem] flex flex-col items-center absolute h-[100vh] bg-white ${
        openState ? "right-0" : "right-[-100%]"
      }`}
    >
      <div class=" pt-[6rem] text-black ">
        <h3 class="text-black text-center font-bold text-2xl mb-[2rem]">
          Sign Up
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
          <button class="bg-red-600 text-white py-[.6rem]">Sign Up</button>
          <div>
            <h3>
              Already have account?{" "}
              <b class="text-red-600 cursor-pointer">Sign In</b>
            </h3>
            <h4 class="flex gap-[.3rem] mt-[0.5rem]">
              (Make <p class="text-red-600 cursor-pointer">new Accout</p> or go
              to
              <p class="text-red-600 cursor-pointer">Sign In</p> Page for Test
              Account)
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
