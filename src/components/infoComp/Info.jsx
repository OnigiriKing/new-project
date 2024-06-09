
import allSvg from "svg/allSvg";
import { useDispatch, useSelector } from "react-redux";
import { setInfo } from "features/Redux/reducers/loginWindowSlice";

export default function Info() {
  const dispatch = useDispatch();
  const logInStatus = useSelector((state) => state.userInfo.isLoggedIn);
  const infoWindow = useSelector((state) => state.loginWindow.info);


  return (
    <div
      class={`w-[30rem] flex flex-col items-center fixed h-[100vh] bg-white duration-[.5s] ease-in-out z-[100] ${
        infoWindow ? "left-0" : "left-[-100%]"
      } `}
    >
      <div
        class="cursor-pointer hover:text-red-600 duration-[.3s] ease-in-out text-black absolute right-[1.5rem] top-[1.5rem]"
        onClick={() => dispatch(setInfo())}
      >
        {allSvg(35).close}
      </div>
      <div class=" pt-[6rem] text-black w-[90%]"></div>
    </div>
  );
}
