import React from "react";
import LogoStyle from "./Logo.module.css";
const Logo = () => {
  return (
    <div className={LogoStyle.logo}>
      <div>
        <h1>Facebook</h1>
      </div>
      <div>
        <p>Connect with friends and the world around you on Facebook.</p>
      </div>
    </div>
  );
};

export default Logo;
