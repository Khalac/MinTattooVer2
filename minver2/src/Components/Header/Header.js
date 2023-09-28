import React from "react";
import "./Header.scss";

import logo from "../assets/logo/logored.png";

function Header() {
  function scrollToHome() {
    var elmnt = document.getElementById("Home");
    elmnt.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function scrollToArtist() {
    var elmnt = document.getElementById("Artist");
    elmnt.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function scrollToContact() {
    var elmnt = document.getElementById("Contact");
    elmnt.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function scrollToFAQ() {
    var elmnt = document.getElementById("FAQ");
    elmnt.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <div className="Header">
      <div className="Pages">
        <div className="Page" onClick={scrollToHome}>
          Home
        </div>
        <div className="Page" onClick={scrollToArtist}>
          Artist
        </div>
        <img src={logo} alt="logo" className="logoHeader" />
        <div className="Page" onClick={scrollToContact}>
          Contact
        </div>
        <div className="Page" onClick={scrollToFAQ}>
          Faq
        </div>
      </div>
      <div className="TattooStu">Tattoo Studio</div>
    </div>
  );
}

export default Header;
