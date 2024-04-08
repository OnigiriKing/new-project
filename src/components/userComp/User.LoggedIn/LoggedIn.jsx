import { logOut } from "features/Redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import allSvg from "svg/allSvg";

export default function LoggedIn() {

  const dispatch = useDispatch()
  const curentUser = useSelector((state) => state.userInfo.currentUser);
  const userName = useSelector(
    (state) => state.userInfo.users[curentUser].name
  );




  return (
    <>
      <div>
        <div>{allSvg(20).userIcon}</div>
        <h3>{curentUser}</h3>
        <h3>{userName}</h3>
      </div>
      <button onClick={() => dispatch(logOut())}>Log Out</button>
    </>
  );
}
