import React from "react";
import "./Minh.scss";
import Header from "../../Components/Header/Header";

import MinhImg from "../../Components/assets/imgBrother/Minh.webp";

function Minh() {
  return (
    <div className="Minh">
      <div className="Minh_Header">
        <Header />
      </div>
      <div className="Minh_Container">
        <div className="Minh_Name">
          <div className="Minh_Name_Container">
            <div className="Minh_Name_Img"></div>
            <div className="Minh_Name_Red_Left"></div>
            <div className="Minh_Name_Red_Right"></div>
            <div className="Minh_Name_Job">THE TATTOO ARTIST</div>
            <div className="Minh_Name_Name">MINH</div>
            <div className="Minh_Name_Style">Black & Grey</div>
            <div className="Minh_Name_Style">Color</div>
            <div className="Minh_Name_Style">Realism</div>
          </div>
        </div>
        <div className="Minh_Text1">
          <div className="Minh_Text1_Text1">
            Meet a talented individual named Minh, who hails from Vietnam and
            was born in 1999. At just 24 years old, he has already spent 7 years
            honing his craft as a tattoo artist.
          </div>
          <div className="Minh_Text1_Text2">
            Minh's artistic journey began at a very young age, when his
            fascination with drawing small objects sparked his creative spirit.
            However, it was a pivotal moment when he discovered the world of
            tattooing that truly ignited his passion for art.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Minh;
