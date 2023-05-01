import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import "./styles/style.css";
import HeroSection from "./components/HeroSection/HeroSection";
import LogoBarSection from "./components/LogoBarSection/LogoBarSection";

function App() {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModal]);

  return (
    <div className="App">
      <Header setOpenModal={setOpenModal} />
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <HeroSection />
      <LogoBarSection />
    </div>
  );
}

export default App;
