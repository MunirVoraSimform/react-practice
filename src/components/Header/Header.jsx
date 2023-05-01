import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
// import rocket from "../../assets/images/rocket-icon.svg";
import Button from "../Button/Button";

const Header = (props) => {
  const [mobileNav, setMobileNav] = useState(false);
  const links = document.querySelectorAll("nav a");

  links.forEach((btn) => {
    btn.addEventListener("click", () => {
      setMobileNav(false);
    });
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 992) {
        setMobileNav(false);
      }
    });

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.style.boxShadow = "35px 30px 50px rgba(51, 102, 255, 0.05)";
      } else {
        header.style.boxShadow = "none";
      }
    });
  }, []);

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
                <nav
                  className={`nav-links ${mobileNav ? "show-mobile-nav" : ""}`}
                >
                  <Button btnType="tertiary" btnTitle="Home" />
                  <Button btnType="tertiary" btnTitle="About US" />
                  <Button btnType="tertiary" btnTitle="Services" />
                  <Button btnType="tertiary" btnTitle="Career" />
                  <Button btnType="tertiary" btnTitle="Contact Us" />
                </nav>
                <div className="btns">
                  <Button
                    btnType="primary"
                    btnTitle="Get Started"
                    imgName="rocket-icon.svg"
                    imgPosition="left"
                    onClick={() => {
                      props.setOpenModal(true);
                    }}
                  />
                  <div
                    className={`hamburger ${mobileNav ? "active" : ""}`}
                    onClick={() => {
                      setMobileNav(!mobileNav);
                    }}
                  >
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
