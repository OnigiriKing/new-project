export default function LoginFooter({ state, setLoginState }) {
  if (state === "Sign In") {
    return (
      <div>
        <h3>
          Create a new account:{" "}
          <b
            class="text-red-600 cursor-pointer"
            onClick={() =>
              setLoginState((prevState) => ({ ...prevState, type: "Sign Up" }))
            }
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
            onClick={() =>
              setLoginState((prevState) => ({ ...prevState, type: "Sign In" }))
            }
          >
            Sign In
          </b>
        </h3>
        <h4 class="flex gap-[.3rem] mt-[0.5rem]">
          (Make <p class="text-red-600 cursor-pointer">new Accout</p> or go to
          <p
            class="text-red-600 cursor-pointer"
            onClick={() =>
              setLoginState((prevState) => ({ ...prevState, type: "Sign In" }))
            }
          >
            Sign In
          </p>
          Page for Test Account)
        </h4>
      </div>
    );
  }
}
