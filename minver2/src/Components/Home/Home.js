import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div className="Home" id="Home">
      <div className="HomeImg">
        <div className="LeftImg">
          <div className="TopImg"></div>
          <div className="BottomImg"></div>
        </div>
        <div className="RightImg"></div>
      </div>

      <div className="ImgBox">
        <div className="Box1"></div>
        <div className="Box2"></div>
        <div className="Box3"></div>
      </div>
      <div className="HomeEnd">
        <div className="HomeLine"></div>
      </div>
    </div>
  );
}

export default Home;
