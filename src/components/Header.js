import React from "react";
import "../styles/header.css";
import CTA from "./CTA";
import MyPic from "../assets/pic2.png";
import HeaderSocials from "./HeaderSocials";
import Typical from "react-typical";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>
          Hi there!<span class="waving-hand"> 👋</span>
        </h3>
        <h1>
          I'm <span>Amirsali Muhalli</span>
        </h1>
        <h5 className="text-light">
          <Typical
            steps={[
              "Front End",
              800,
              "Back End",
              800,
              "Full Stack Developer",
              2000,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </h5>

        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={MyPic} alt="MyPic" className="me-image" />
        </div>

        <a href="#about" className="scroll__down">
          View more
        </a>
      </div>
    </header>
  );
};

export default Header;
