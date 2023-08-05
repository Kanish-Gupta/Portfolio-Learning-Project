import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.avif",
      title: "Web Design",
      desc: "He is simply dummy text of the printing and typesetting industry",
      img: "assets/project.avif",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc: "He is simply dummy text of the printing and typesetting industry",
      img: "assets/project.avif",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc: "He is simply dummy text of the printing and typesetting industry",
      img: "assets/project.avif",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt=""></img>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src="assets/project.avif"></img>
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src="assets/arrow.png"
        className="arrow left"
        onClick={() => handleClick("left")}
      ></img>
      <img
        src="assets/arrow.png"
        className="arrow right"
        onClick={() => handleClick()}
      ></img>
    </div>
  );
}
