import { logOut, changePic } from "features/Redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import allSvg from "svg/allSvg";
import { useState } from "react";
import profilePics from "utils/data/profilePics";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userInfo.currentUser.name);
  const userPic = useSelector((state) => state.userInfo.currentUser.img);
  const loginStatus = useSelector((state) => state.loginStatus);


  const [confirmWindow, setConfirmWindow] = useState({
    logOut: false,
    chooseIcon: false,
    changePass: false,
    changeName: false,
  });

  const [changePassword, setChangePassword] = useState({
    oldPass: "",
    newPass: "",
  });
  const [changeName, setChangeName] = useState("");



  function changeNewName() {
    if (changeName != userName && changeName != "" && changeName.length >= 4) {
      dispatch(changeName(changeName));
    } else {
      dispatch(
        setLoginStatus({
          userName: "Name Error",
        })
      );
    }
  }

  function changeNewPassword() {
    if (
      changePassword.newPass != changePassword.oldPass &&
      changePassword.newPass != "" &&
      changePassword.newPass.length >= 6
    ) {
      dispatch(
        changePassword({
          oldPass: changePassword.oldPass,
          newPass: changePassword.newPass,
        })
      );
    } 
    if (changePassword.newPass == changePassword.oldPass) {
dispatch(
  setLoginStatus({
    password: "Same as old password",
  })
);
    }
    if (changePassword.newPass.length < 6) {
dispatch(
  setLoginStatus({
    password: "Password should be 6 simbols",
  })
);
    }
    }



  const handleOldPassChange = (event) => {
    const value = event.target.value;
    setChangePassword((prevState) => ({
      ...prevState,
      oldPass: value,
    }));
  };

  const handleNewPassChange = (event) => {
    const value = event.target.value;
      setChangePassword((prevState) => ({
        ...prevState,
        newPass: value,
      }));
  };

  function logOutHandler() {
    dispatch(logOut());
    setConfirmWindow((prevState) => ({
      ...prevState,
      logOut: !prevState.logOut,
    }));
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
              onClick={() =>
                setConfirmWindow((prevState) => ({
                  ...prevState,
                  logOut: !prevState.logOut,
                }))
              }
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  }

  function IconChangeWindow() {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[10]">
        <div className="bg-white p-6 rounded-lg shadow-md justify-center">
          <div class="flex gap-[1rem] flex-col">
            <div
              onClick={() =>
                setConfirmWindow((prevState) => ({
                  ...prevState,
                  chooseIcon: !prevState.chooseIcon,
                }))
              }
              class="self-end cursor-pointer hover:text-red-600 duration-[.3s]"
            >
              {allSvg(30).close}
            </div>
            <div class="flex flex-row gap-[1rem]">
              <div className="w-[6rem] cursor-pointer">
                <img
                  src={profilePics.pp1}
                  onClick={() => {
                    dispatch(changePic({ newPic: profilePics.pp1 }));
                    setConfirmWindow((prevState) => ({
                      ...prevState,
                      chooseIcon: !prevState.chooseIcon,
                    }));
                  }}
                  className="w-fit"
                ></img>
              </div>
              <div className="w-[6rem] cursor-pointer">
                <img
                  src={profilePics.pp2}
                  onClick={() => {
                    dispatch(changePic({ newPic: profilePics.pp2 }));
                    setConfirmWindow((prevState) => ({
                      ...prevState,
                      chooseIcon: !prevState.chooseIcon,
                    }));
                  }}
                  className="w-fit"
                ></img>
              </div>
              <div className="w-[5rem] cursor-pointer">
                <img
                  src={profilePics.pp3}
                  onClick={() => {
                    dispatch(changePic({ newPic: profilePics.pp3 }));
                    setConfirmWindow((prevState) => ({
                      ...prevState,
                      chooseIcon: !prevState.chooseIcon,
                    }));
                  }}
                  className="w-fit"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function ChangeSettingsWindow() {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[10]">
        <div className="bg-white flex flex-col p-6 rounded-lg shadow-md justify-center gap-[.5rem]">
          <div
            onClick={() =>
              setConfirmWindow((prevState) => ({
                ...prevState,
                changePass: false,
                changeName: false,
              }))
            }
            class="self-end cursor-pointer hover:text-red-600 duration-[.3s]"
          >
            {allSvg(30).close}
          </div>
          {confirmWindow.changePass ? (
            <div class="justify-center gap-[.5rem] flex flex-col">
              <label>Verify your old password</label>
              <input
                placeholder="Old password"
                onChange={(e) => handleOldPassChange(e)}
                type="password"
              ></input>
              <label>Please enter your new password</label>
              {loginStatus.password !== "" ? (
                <p class="text-red-600">{loginStatus.password}</p>
              ) : (
                ""
              )}
              <input
                placeholder="New password"
                onChange={(e) => handleNewPassChange(e)}
                type="password"
              ></input>
              <button class="mt-[1rem]" onClick={() => changeNewPassword()}>
                Submit
              </button>
            </div>
          ) : (
            ""
          )}

          {confirmWindow.changeName ? (
            <div class="justify-center gap-[.5rem] flex flex-col">
              <label>Enter your new name</label>
              {loginStatus.userName !== "" ? (
                <p class="text-red-600">{loginStatus.userName}</p>
              ) : (
                ""
              )}
              <input
                placeholder="Name"
                onChange={(e) => setChangeName(e)}
                type="text"
              ></input>
              <button class="mt-[1rem]" onClick={() => changeNewName()}>
                Submit
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }

  

  return (
    <>
      <div class="flex flex-col items-center justify-center">
        <div class="flex gap-[1rem] items-center flex-col mb-[1rem]">
          <div
            class="border-solid border-[1px] border-black rounded-full p-[4rem] relative justify-center items-center overflow-hidden flex bg-black group cursor-pointer"
            onClick={() =>
              setConfirmWindow((prevState) => ({
                ...prevState,
                chooseIcon: !prevState.chooseIcon,
              }))
            }
          >
            <img
              src={userPic}
              class="flex absolute top-0 right-0 z-[2] group-hover:opacity-90"
            ></img>
            <div class="z-[3] absolute bottom-0 hidden group-hover:flex">
              {allSvg(25).changeIcon}
            </div>
          </div>
          <h3>Hello, {userName}!</h3>
          <h3
            class="hover:text-red-600 duration-[.4s] cursor-pointer"
            onClick={() =>
              setConfirmWindow((prevState) => ({
                ...prevState,
                changePass: !prevState.changePass,
              }))
            }
          >
            Change password
          </h3>
          <h3
            class="hover:text-red-600 duration-[.4s] cursor-pointer"
            onClick={() =>
              setConfirmWindow((prevState) => ({
                ...prevState,
                changeName: !prevState.changeName,
              }))
            }
          >
            Change email
          </h3>
        </div>
        <button
          onClick={() =>
            setConfirmWindow((prevState) => ({
              ...prevState,
              logOut: !prevState.logOut,
            }))
          }
          class="hover:text-red-600 duration-[.4s] w-fit"
        >
          Log Out
        </button>
      </div>
      {confirmWindow.logOut ? <LogOutWindow /> : ""}
      {confirmWindow.chooseIcon ? <IconChangeWindow /> : ""}
      {confirmWindow.changePass || confirmWindow.changeName ? (
        <ChangeSettingsWindow />
      ) : (
        ""
      )}
    </>
  );
}
