import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import rocket from "../../assets/images/rocket-icon.svg";
const Header = (props) => {

  const [mobileNav, setMobileNav] = useState(false);
  const links = document.querySelectorAll("nav a");

  links.forEach((btn) => {
    btn.addEventListener("click", () => {
      setMobileNav(false);
    })
  })

  useEffect(() => {
    window.addEventListener("resize", () => {
      if(window.innerWidth > 992){
        setMobileNav(false)
      }
    })
  },[])
  
  return (
    <>
      <header className="header-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header-wrapper d-flex align-item-center justify-content-between">
                <div className="logo-wrapper">
                  <a href="#!" className="logo">
                    <img src={logo} alt="logo" />
                  </a>
                </div>
                <nav className={`nav-links ${mobileNav ? "show-mobile-nav" : ""}`}>
                  <a href="#!" className="btn btn-tertiary">
                    <span>Home</span>
                  </a>
                  <a href="#!" className="btn btn-tertiary">
                    <span>About Us</span>
                  </a>
                  <a href="#!" className="btn btn-tertiary">
                    <span>Services</span>
                  </a>
                  <a href="#!" className="btn btn-tertiary">
                    <span>Career</span>
                  </a>
                  <a href="#!" className="btn btn-tertiary">
                    <span>Contact Us</span>
                  </a>
                </nav>
                <div className="btns">
                  <a
                    href="#!"
                    onClick={() => {props.setOpenModal(true)}}
                    className="btn btn-primary get-started-btn"
                  >
                    <img src={rocket} alt="rocket icon" />
                    <span>Get Started</span>
                  </a>
                  <div className={`hamburger ${mobileNav ? "active" : ""}`} onClick={() => {setMobileNav(!mobileNav)}}>
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
