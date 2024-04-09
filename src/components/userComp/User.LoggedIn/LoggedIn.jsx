import { logOut } from "features/Redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import allSvg from "svg/allSvg";

export default function LoggedIn() {

  const dispatch = useDispatch()
  const userName = useSelector((state) => state.userInfo.currentUser.name);

  function logOutHandler() {
    const isConfirmed = window.confirm("Are you sure you want to log out?");
    if (isConfirmed) {
      dispatch(logOut());
    }
  }

  function LogOutWindow() {

    return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">Are you sure you want to log out?</p>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Yes
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
        >
          No
        </button>
      </div>
    </div>
    )
  };





  return (
    <>
      <div class="flex gap-[1rem] items-center">
        <div class="border-solid border-[1px] border-black rounded-full p-[.3rem]">
          {allSvg(20).userIcon}
        </div>
        <h3>{userName}</h3>
      </div>
      <button
        onClick={() => logOutHandler()}
        class="hover:text-red-600 duration-[.4s]"
      >
        Log Out
      </button>
    </>
  );
}
