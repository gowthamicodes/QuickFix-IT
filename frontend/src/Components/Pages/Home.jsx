import Homeimage from "../../assets/homepage image.png";
import HomeMobileImage from "../../assets/HomeMobileImage.png"
// import "./Home.css";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../Context/Auth-context";
import "./Home.css";


function HomePage() {
  // const { currentUser, isLoggedIn, logout } = useContext(AuthContext);

  return (
    <>
    <div className="hero-wrapper">

<picture>
      {/* Hero Image */}
      <source
media="(max-width: 768px)"
        srcSet={HomeMobileImage}
      />

<img
        src={Homeimage}
        alt="QuickFix IT"
        className="home-image"
      />

      </picture>

      {/* Navigation */}

        {/* Invisible clickable area over Explore Services */}
  <Link
    to="/services"
    className="hero-explore-link"
    aria-label="Explore Services"
  />

  {/* Invisible clickable area over Contact Us */}
  <Link
    to="/contact"
    className="hero-contact-link"
    aria-label="Contact Us"
  />

</div>
        </>  
  );
}

export default HomePage;