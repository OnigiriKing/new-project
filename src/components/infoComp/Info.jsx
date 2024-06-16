
import allSvg from "svg/allSvg";
import { useDispatch, useSelector } from "react-redux";
import { setInfo } from "features/Redux/reducers/loginWindowSlice";

export default function Info() {
  const dispatch = useDispatch();
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
      <div class=" pt-[6rem] text-black w-[90%]">
        <div class="flex flex-col gap-[.5rem] mb-[.5rem]">
          <h3 class="font-bold text-lg">About Us</h3>
          <p>
            Welcome to BKK Gym, your premier fitness destination in Bangkok! We
            offer state-of-the-art facilities, diverse classes, and expert
            trainers to help you achieve your health goals. Join our vibrant
            community and let’s reach new heights together!
          </p>
        </div>
        <div class="flex flex-col gap-[.5rem] mb-[.5rem]">
          <h3 class="font-bold text-lg">Gallery</h3>
          <div></div>
        </div>
        <div class="flex flex-col gap-[.5rem] mb-[.5rem]">
          <h3 class="font-bold text-lg">Contact Info</h3>
          <div class="flex flex-col">
            <p>100 Sathon Rd, Khwaeng Silom, Bangkok</p>
            <p>+66-000-000</p>
            <p>bbkgym@gmail.com</p>
          </div>
        </div>
        <div class="flex flex-col gap-[.5rem] mb-[.5rem]">
          <h3 class="font-bold text-lg">Follow Us</h3>
          <div class="flex items-center gap-2">
            <a class="cursor-pointer hover:text-red-600 duration-[.4s] ">
              {allSvg(25).linkedin}
            </a>
            <a class="cursor-pointer hover:text-red-600 duration-[.4s] ">
              {allSvg(25).twitter}
            </a>
            <a class="cursor-pointer hover:text-red-600 duration-[.4s] ">
              {allSvg(25).facebook}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
