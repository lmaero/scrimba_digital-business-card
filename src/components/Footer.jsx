import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:luis.g@lmaero.pro">
        <ion-icon name="mail"></ion-icon>
      </a>
      <a href="https://www.linkedin.com/in/lmaeropro/">
        <ion-icon name="logo-linkedin"></ion-icon>
      </a>
      <a href="https://github.com/lmaero">
        <ion-icon name="logo-github"></ion-icon>
      </a>
    </footer>
  );
}

export default Footer;
