import { logOut } from "features/Redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import allSvg from "svg/allSvg";

export default function LoggedIn() {

  const dispatch = useDispatch()
  const userName = useSelector((state) => state.userInfo.currentUser.name);





  return (
    <>
      <div class="flex gap-[1rem] items-center">
        <div class="border-solid border-[1px] border-black rounded-full p-[.3rem]">{allSvg(20).userIcon}</div>
        <h3>{userName}</h3>
      </div>
      <button onClick={() => dispatch(logOut())} class="hover:text-red-600 duration-[.4s]">Log Out</button>
    </>
  );
}
