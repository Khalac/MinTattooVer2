import React from "react";
import Header from "../../Components/Header/Header";
import "./MainPage.scss";

import Home from "../../Components/Home/Home";
import Artist from "../../Components/Artist/Artist";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";

function MainPage() {
  return (
    <div className="MainPage">
      <div className="MP_Header">
        <Header />
      </div>
      <div className="MP_Home">
        <Home />
      </div>
      <div className="MP_Artist">
        <Artist />
      </div>
      <div className="MP_About">
        <About />
      </div>
      <div className="MP_Contact">
        <Contact />
      </div>
    </div>
  );
}

export default MainPage;
