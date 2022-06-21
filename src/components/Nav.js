import React, { useState } from "react";
import "../styles/nav.css";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GiGraduateCap } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FaHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <CgProfile />
      </a>
      <a
        href="#education"
        onClick={() => setActiveNav("#education")}
        className={activeNav === "#education" ? "active" : ""}
      >
        <GiGraduateCap />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <MdWork />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdContactPhone />
      </a>
    </nav>
  );
};

export default Nav;
