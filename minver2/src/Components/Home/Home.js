import React from "react";
import "./Home.scss";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home" id="Home">
      <div className="HomeBanner">
        <div className="BannerText1">Welcome to</div>
        <div className="BannerText2">HYPER INKER</div>
      </div>
      <div className="HomeAbout">
        <div className="AboutTitle">ABOUT US</div>
        <div className="AboutContent">
          <div className="AboutImgAaron"></div>
          <div className="AboutText">
            <div>Hyper Inker Tattoo Studio established in 2023.</div>
            <div>
              Hyper team with all technique, enthusiasm and creativity, ready to
              meet any unique ideas coming from you - Our Inkers.
            </div>
            <Link to="/About" className="AboutView">
              View more
            </Link>
          </div>
          <div className="AboutInfor">
            <div className="ArtistInfor">
              <div className="ArtistNum">5</div>
              <div className="ArtistText">ARTIST</div>
            </div>
            <div className="ExperInfor">
              <div className="ExperNum">7</div>
              <div className="ExperText">YRS EXPERIENCE</div>
            </div>
          </div>
          <div className="AboutBrotherImg"></div>
          <div className="AboutNextText">
            <div>WE'RE HYPED</div> <div>TO GET YOU </div>
            <div>INKED </div> <div className="AboutNextText1">!!!</div>
          </div>
          <div className="AboutTattooImage"></div>
          <div className="AboutAchieve">
            <div className="Conven">
              <div className="ConvenNum">15+</div>
              <div className="ConvenText">WORLD CONVENTION</div>
            </div>
            <div className="Trophies">
              <div className="TrophiesNum">30+</div>
              <div className="TrophiesText">TROPHIES</div>
            </div>
          </div>
          <div className="AboutNicoleImg"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
