import { useEffect, useState } from "react";
import "./App.css";
import "./styles/style.css";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import HeroSection from "./components/HeroSection/HeroSection";
import LogoBarSection from "./components/LogoBarSection/LogoBarSection";
import BackToTop from "./components/BackToTop/BackToTop";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Modal Toggle
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModal]);

  // Back To Top Toggle
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <Header setOpenModal={setOpenModal} />
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <HeroSection />
      <LogoBarSection />
      {showBackToTop && <BackToTop />}
      {/* <BackToTop /> */}
    </div>
  );
}

export default App;
