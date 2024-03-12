export default function Login() {
  return (
    <div class="w-[30rem] flex flex-col items-center absolute h-[100vh] bg-white right-0">
      <div class="common-wrapper pt-[4rem] text-black">
        <h3 class="text-black">Sign Up</h3>
        <div>
          <div>
            <label>Email</label>
            <input placeholder="bbkGym@gmail.com"></input>
          </div>
          <button>Sign Up</button>
          <div>
            <h3>
              Already have account? <b class="text-red-600">Sign In</b>
            </h3>
            <h4 class="flex gap-[.3rem]">
              (Make <p class="text-red-600">new Accout</p> or go to
              <p class="text-red-600">Sign In</p> Page for Test Account)
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
