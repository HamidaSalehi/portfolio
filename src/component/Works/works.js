import React from "react";
import "./works.css";
import protfolio1 from "../../assist/protfolio-1.jpg";
import protfolio2 from "../../assist/protfolio-2.jpg";
import protfolio3 from "../../assist/protfolio-3.jpg";

const Works = () => {
  return (
    <section id="Works">
      <h2 className="worrksTitle">My protfolio </h2>
      <div className="worksImgs">
        <a href="./DiceGame/index.html" target="_blank" rel="noreferrer">
          <img src={protfolio1} alt="" className="worksImg" />
        </a>
        <a href="./NumberGuess/index.html" target="_blank" rel="noreferrer">
          <img src={protfolio2} alt="" className="worksImg" />
        </a>
        <a href="./showmodal/index.html" target="_blank" rel="noreferrer">
          <img src={protfolio3} alt="" className="worksImg" />
        </a>
      </div>
      <a
        href="https://github.com/HamidaSalehi"
        target="_blank"
        rel="noreferrer"
      >
        <button className="workBtn">See More</button>
      </a>
    </section>
  );
};

export default Works;
