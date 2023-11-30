import React, { useRef } from "react";
import "./contact.css";
import heray_space from "../../assist/heray_spice.png";
import letsgo from "../../assist/letsgo.png";
import TwitterIcon from "../../assist/twitter.png";
import github from "../../assist/Github.png";
import linkdenIcon from "../../assist/linkdenIcon.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yg8it1j",
        "template_47sv6zk",
        form.current,
        "NvZDH7bhMI2hfiuqSS67g"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contactpage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with includes
        </p>
        <div className="clientImgs">
          <a href="https://herayspice.com/" target="_blank" rel="noreferrer">
            <img src={heray_space} alt="heray_space" className="clientImg1" />
          </a>
          <a
            href="https://letsgoafghanistan.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={letsgo} alt="letsgo" className="clientImg2" />
          </a>
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle"> Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="to_name"
          />

          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_name"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a
              href="https://x.com/Hamida__Salehi/status/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={TwitterIcon} alt="TwitterIcon" className="link" />
            </a>
            <a
              href="https://www.linkedin.com/in/hamida-salehi-229a90253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkdenIcon} alt="linkdenIcon" className="link" />
            </a>
            <a
              href="https://github.com/HamidaSalehi"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
