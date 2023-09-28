import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import "./MainPage.scss";

import Home from "../../Components/Home/Home";
import Artist from "../../Components/Artist/Artist";
import Contact from "../../Components/Contact/Contact";
import FAQ from "../../Components/FAQ/FAQ";

import "../../Components/assets/font/Ramelik.otf";
import Service from "../../Components/Services/Service";

function MainPage() {
  return (
    <div className="MainPage">
      <div className="MP_CommingSoon">
        <div className="CommingSoonText">COMING SOON</div>
      </div>
      <div className="MP_Header">
        <Header />
      </div>
      <div className="MP_Home">
        <Home />
      </div>
      <div className="MP_Service">
        <Service />
      </div>
      <div className="MP_Img"></div>
      <div className="MP_Artist">
        <Artist />
      </div>
      <div className="MP_Contact">
        <Contact />
      </div>
      <div className="MP_FAQ">
        <FAQ />
      </div>
    </div>
  );
}

export default MainPage;
