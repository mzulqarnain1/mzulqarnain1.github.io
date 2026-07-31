import React from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import {greeting} from "../../portfolio";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className="footer-text">
          © {new Date().getFullYear()} {greeting.username}
        </p>
      </div>
    </Fade>
  );
}
