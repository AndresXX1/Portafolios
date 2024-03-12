import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Hecho con mucho ❤️ ")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Podes ver este proyecto aca{" "}
          <a href="https://github.com/AndresXX1/Briefcase">
            developer Andres V.
          </a>
        </p>
      </div>
    </Fade>
  );
}
