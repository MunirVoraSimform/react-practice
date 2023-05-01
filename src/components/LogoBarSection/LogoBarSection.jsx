import AirbnbLogo from "../../assets/images/airbnb-logo.png";
import GoogleLogo from "../../assets/images/google-logo.png";
import AmazonLogo from "../../assets/images/amazon-logo.png";
import MicrosoftLogo from "../../assets/images/microsoft-logo.png";
import FedexLogo from "../../assets/images/fedex-logo.png";
import HubspotLogo from "../../assets/images/hubspot-logo.png";

const LogoBarSection = () => {
  return (
    <>
    <section class="logoBar-section">
        <div class="container">
            <div class="logoBar-border">
                <div class="row justify-content-between align-item-center">
                    <div class="col-4 col-md-2">
                        <div class="logo-frame" data-aos="flip-down" data-aos-duration="1000">
                            <img src={AirbnbLogo} alt="airbnb logo" />
                        </div>
                    </div>
                    <div class="col-4 col-md-2">
                        <div class="logo-frame" data-aos="flip-down" data-aos-duration="1000">
                            <img src={GoogleLogo} alt="google logo" />
                        </div>
                    </div>
                    <div class="col-4 col-md-2">
                        <div class="logo-frame" data-aos="flip-down" data-aos-duration="1000">
                            <img src={AmazonLogo} alt="amazon logo" />
                        </div>
                    </div>
                    <div class="col-4 col-md-2">
                        <div class="logo-frame" data-aos="flip-down" data-aos-duration="1000">
                            <img src={MicrosoftLogo} alt="microsoft logo" />
                        </div>
                    </div>
                    <div class="col-4 col-md-2">
                        <div class="logo-frame" data-aos="flip-down" data-aos-duration="1000">
                            <img src={FedexLogo} alt="fedex logo" />
                        </div>
                    </div>
                    <div class="col-4 col-md-2">
                        <div class="logo-frame" data-aos="flip-down" data-aos-duration="1000">
                            <img src={HubspotLogo} alt="hubspot logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default LogoBarSection