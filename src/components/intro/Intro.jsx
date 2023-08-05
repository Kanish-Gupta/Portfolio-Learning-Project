import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";
export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.avif"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Kanish Gupta</h1>
          <h3>
            FullStack <span>Developer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png"></img>
        </a>
      </div>
    </div>
  );
}
