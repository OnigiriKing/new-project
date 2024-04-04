import { logOut } from "features/Redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function LoggedIn() {

  const dispatch = useDispatch()
  const userName = useSelector((state) => state.userInfo.currentUser);



  return (
    <>
      <button onClick={() => dispatch(logOut())}>Log Out</button>
    </>
  );
}
