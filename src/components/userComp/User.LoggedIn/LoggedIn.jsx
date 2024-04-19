import { logOut } from "features/Redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import allSvg from "svg/allSvg";
import { useState } from "react";
import textImg from "utils/img/profilePics/ppDef.png"

export default function LoggedIn() {

  const dispatch = useDispatch()
  const userName = useSelector((state) => state.userInfo.currentUser.name);

  const [logOutConfirm, setlogOutConfirm] = useState(false)
  const [chooseIcon, setChooseIcon] = useState(false);

  function logOutHandler() {
      dispatch(logOut());
      setlogOutConfirm(false)
  }

  


  function LogOutWindow() {

    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[10]">
        <div className="bg-white p-6 rounded-lg shadow-md justify-center">
          <p className="mb-4">Are you sure you want to log out?</p>
          <div class="flex justify-center">
            <button
              className=" hover:bg-red-600 hover:text-white text-black font-bold py-2 px-4 rounded mr-2 border-black bg-gray-300"
              onClick={() => logOutHandler()}
            >
              Yes
            </button>
            <button
              className="bg-gray-300 hover:bg-red-600 hover:text-white text-black font-bold py-2 px-4 rounded"
              onClick={() => setlogOutConfirm(false)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  };

  function IconChangeWindow() {

    return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[10]">
      <div className="bg-white p-6 rounded-lg shadow-md justify-center">
        <div class="flex justify-center gap-[2rem]">
          <img src={textImg} className="w-[3rem]"></img>
          <img src={textImg} className="w-[3rem]"></img>
          <img src={textImg} className="w-[3rem]"></img>
        </div>
      </div>
    </div>
    )
  }





  return (
    <>
      <div class="flex flex-col items-center justify-center">
        <div class="flex gap-[1rem] items-center flex-col mb-[1rem]">
          <div
            class="border-solid border-[1px] border-black rounded-full p-[4rem] relative justify-center items-center overflow-hidden flex bg-black group cursor-pointer"
            onClick={() => setChooseIcon(true)}
          >
            <img
              src={textImg}
              class="flex absolute top-0 right-0 z-[2] group-hover:opacity-90"
            ></img>
            <div class="z-[3] absolute bottom-0 hidden group-hover:flex">
              {allSvg(25).changeIcon}
            </div>
          </div>
          <h3>{userName}</h3>
        </div>
        <button
          onClick={() => setlogOutConfirm(true)}
          class="hover:text-red-600 duration-[.4s] w-fit"
        >
          Log Out
        </button>
      </div>
      {logOutConfirm ? <LogOutWindow /> : ""}
      {chooseIcon? <IconChangeWindow /> : ""}
    </>
  );
}
