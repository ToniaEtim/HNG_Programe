import React from "react";
import downloadImage from "../images/downloa.png";

import logoMain from "../images/Logo-Main.png";

const FooterSection = () => {
  return (
    <footer id="footer">
      <div className="footer-item">
        <img alt="Zuri" src={downloadImage} />
      </div>
      <p className="footer-item">HNG Internship 9 Frontend Task</p>
      <div className="footer-item">
        <img alt="Logo" src={logoMain} />
      </div>
    </footer>
  );
};

export default FooterSection;
