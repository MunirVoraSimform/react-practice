import HeroImage from "../../assets/images/hero-image.png";
import Button from "../Button/Button";

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="hero-content">
                <div
                  className="text"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <div className="headLine-subHead text-center text-lg-left">
                    <h1>Create Engaging Landing Pages</h1>
                    <p>
                      Build beautiful landing pages in record time with{" "}
                      <a href="#!">Anima's</a> Landing Page UI kit for Figma. No
                      code required!
                    </p>
                  </div>
                  <Button btnTitle="How it works" btnType="primary" />
                </div>
                <div
                  className="hero-img"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img src={HeroImage} alt="hero section background" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
