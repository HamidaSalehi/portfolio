import React, { useState } from "react";
import "./intro.css";
import bg from "../../assist/image.jpg";
import btnImg from "../../assist/hire.jpg";
import { Link } from "react-scroll";

const Intro = () => {
  function sayHello() {
    alert(
      "Hello I'm Hamida Salehi , I'm a student at the University of Ghalib and also a student at the CTI."
    );
  }

  return (
    <section id="intro">
      <div className="intriContent">
        <span className="hello">Hi,</span>
        <span className="introtext">
          I'm <span className="introName">Hamida Salehi</span>
          <br />
          Junior Web Developer
        </span>
        <p className="intropara">I am a student at CTI(code to inspire)</p>
        <Link>
          <button className="btn" onClick={sayHello}>
            <img src={btnImg} alt="hire" className="btnImg" />
            Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="" className="bg"></img>
    </section>
  );
};

export default Intro;
