import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assist/logo.jpg";
import contactImg from "../../assist/contact.png";
import { Link } from "react-scroll";
import menu from "../../assist/menu.png";

const Navbar = () => {
  const [showmenu, setshowmenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="Works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Protfolio
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Clients
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contactImg} alt="" className="desktopMenuImg" />
        contact me
      </button>
      <img
        src={menu}
        alt="menu"
        className="mobMenu"
        onClick={() => setshowmenu(!showmenu)}
      />
      <div className="navMenu" style={{ display: showmenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={() => setshowmenu(false)}
          className="listItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={() => setshowmenu(false)}
          className="listItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="Works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={() => setshowmenu(false)}
          className="listItem"
        >
          Protfolio
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={() => setshowmenu(false)}
          className="listItem"
        >
          Clients
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={() => setshowmenu(false)}
          className="listItem"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
