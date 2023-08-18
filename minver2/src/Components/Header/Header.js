import React from "react";
import "./Header.scss";

function Header() {
  function scrollToHome() {
    var elmnt = document.getElementById("Home");
    elmnt.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToArtist() {
    var elmnt = document.getElementById("Artist");
    elmnt.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToAbout() {
    var elmnt = document.getElementById("About");
    elmnt.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToContact() {
    var elmnt = document.getElementById("Contact");
    elmnt.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="Header">
      <div className="Wellcome_PageName">
        <div className="Wellcome">Wellcome to</div>
        <div className="PageName">HYPER INKER TATTOO</div>
      </div>
      <div className="Pages">
        <div className="Page" onClick={scrollToHome}>
          Home
        </div>
        <div className="Page" onClick={scrollToArtist}>
          Artist
        </div>
        <div className="Page" onClick={scrollToAbout}>
          About
        </div>
        <div className="Page" onClick={scrollToContact}>
          Contact
        </div>
        <div className="Page">Faq</div>
      </div>
      <div className="TattooStu">Tattoo Studio</div>
    </div>
  );
}

export default Header;
