import Welcome from "./Home.Welcome/Welcome";
import About from "./Home.About/About";
import Classes from "./Home.Classes/Classes";
import ChooseUs from "./Home.ChooseUs/ChooseUs";
import Trainers from "./Home.Trainers/Trainers";
import Testimonials from "./Home.Testimonials/Testimonials";
import Calculator from "./Home.Calculator/Calculator";
import Chart from "./Home.Chart/Chart";
import Call from "./Home.Call/Call";

export default function Home() {
  return (
    <div class="">
      <Welcome />
      <About />
      <Classes />
      <ChooseUs />
      <Trainers />
      <Testimonials />
      <Calculator />
      <Chart />
      <Call />
    </div>
  );
}
