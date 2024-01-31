import Header from "components/headerComp";
import HomePage from "pages/Body/HomePage";
import FooterPage from "pages/Footer/FooterPage";
import { Route, Routes } from "react-router-dom";
import AboutPage from "pages/About/AboutPage";
import GalleryPage from "pages/Gallery/GalleryPage";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <FooterPage />
    </div>
  );
}
