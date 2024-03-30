import { useSelector, useDispatch } from "react-redux";
import { loginUser, registerUser } from "features/Redux/reducers/userSlice";

  const loginWindow = useSelector((state) => state.loginWindow);
  const loginStatus = useSelector((state) => state.loginStatus);
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();


export default function loginAction(email, password) {
  if (loginStatus.type == "Sign Up") {
    if (!userInfo.users[email]) {
      dispatch(registerUser({ email, password }));
    } else {
      dispatch(loginStatus({ login: "this email was already registered" }));
    }
  }
  if (loginStatus.type == "Sign In") {
    if (userInfo.users[email].password === password) {
      dispatch(loginUser({ email, password }));
    } else {
      dispatch(loginStatus({ password: "incorrect password" }));
    }
  }
}
