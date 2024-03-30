import { logOut } from "features/Redux/reducers/userSlice";
import { useDispatch } from "react-redux";

export default function LoggedIn() {

  const dispatch = useDispatch()


  return (
    <>
      <button onClick={() => dispatch(logOut())}>Log Out</button>
    </>
  );
}
