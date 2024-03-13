export default function Login() {
  return (
    <div class="w-[30rem] flex flex-col items-center absolute h-[100vh] bg-white right-0">
      <div class=" pt-[4rem] text-black ">
        <h3 class="text-black text-center">Sign Up</h3>
        <div class="flex flex-col gap-[1rem]">
          <div class="flex flex-col">
            <label>Email</label>
            <input placeholder="bbkGym@gmail.com" class="input-style"></input>
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
