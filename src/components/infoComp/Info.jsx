
import allSvg from "svg/allSvg";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "features/Redux/reducers/loginWindowSlice";

export default function Info() {
  const dispatch = useDispatch();
  const infoWindow = useSelector((state) => state.infoWindow);
  const logInStatus = useSelector((state) => state.userInfo.isLoggedIn);

  return (
    <div
      class={`w-[30rem] flex flex-col items-center fixed h-[100vh] bg-white duration-[.5s] ease-in-out z-[100] ${
        infoWindow ? "right-0" : "right-[-100%]"
      } `}
    >
      <div
        class="cursor-pointer hover:text-red-600 duration-[.3s] ease-in-out text-black absolute left-[1.5rem] top-[1.5rem]"
        onClick={() => dispatch(setLogin(false))}
      >
        {allSvg(35).close}
      </div>
      <div class=" pt-[6rem] text-black w-[90%]">

      </div>
    </div>
  );
}
