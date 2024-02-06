import Header from "components/headerComp";
import HomePage from "pages/Body/HomePage";
import FooterPage from "pages/Footer/FooterPage";
import { Route, Routes } from "react-router-dom";
import AboutPage from "pages/About/AboutPage";
import SchedulePage from "pages/Schedule/SchedulePage";
import ClassesPage from "pages/ClassesPage/ClassesPage";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/classes" element={<ClassesPage />} />
      </Routes>
      <FooterPage />
    </div>
  );
}
