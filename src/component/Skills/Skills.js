import React from "react";
import "./Skills.css";
import Front_End from "../../assist/Front_end.jpg";
import Back_End from "../../assist/Back_End.png";
import Web_Development from "../../assist/Web_Development.jpg";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <div className="skillbars">
        <div className="skillBar">
          <img src={Front_End} alt="uidesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Front_End</h2>
            <p>Html ,CSS , JavaScript, Bootstrap ,React.js</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Back_End} alt="webdesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Back_End</h2>
            <p>SQL_Server , MongoDB ,server side programming languages</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Web_Development} alt="appdesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web_Development</h2>
            <p>I create beautiful interface what Html ,CSS and JavaScript</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
