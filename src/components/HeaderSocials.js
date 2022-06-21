import React from "react";
import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://web.facebook.com/amir.muhalli/"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook />
      </a>
      <a href="mailto:muhallimir23@gmail.com" target="_blank" rel="noreferrer">
        <SiGmail />
      </a>

      <a href="https://github.com/Amirsali" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
