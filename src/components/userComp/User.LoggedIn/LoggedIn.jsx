import { logOut } from "features/Redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import allSvg from "svg/allSvg";

export default function LoggedIn() {

  const dispatch = useDispatch()
  const userName = useSelector((state) => state.userInfo.currentUser);



  return (
    <>
    <div>
    <div>{allSvg(20).userIcon}</div>
    <h3>{userName}</h3>
    </div>
      <button onClick={() => dispatch(logOut())}>Log Out</button>
    </>
  );
}
