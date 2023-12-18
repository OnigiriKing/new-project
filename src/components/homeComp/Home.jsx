import Welcome from "./Home.Welcome/Welcome";
import About from "./Home.About/About";
import Classes from "./Home.Classes/Classes";
import ChooseUs from "./Home.ChooseUs/ChooseUs";

export default function Home() {

  return (
    <div class="">
      <Welcome />
      <About />
      <Classes />
      <ChooseUs />
    </div>
  );
}
