
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
        <div>
          <h3>About Us</h3>
          <p>
            Welcome to BKK Gym, your premier fitness destination in Bangkok! We
            offer state-of-the-art facilities, diverse classes, and expert
            trainers to help you achieve your health goals. Join our vibrant
            community and let’s reach new heights together!
          </p>
        </div>
        <div>
          <h3>Gallery</h3>
          <div></div>
        </div>
        <div>
          <h3>Contact Info</h3>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
