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
        <div className="Minh_Img1"></div>
        <div className="Minh_Text2">
          <div className="Minh_Text2_Container">
            <div className="Minh_Text2_Text">
              Tattoos, in his eyes, represented a unique and enduring form of
              artistic expression – a creation that becomes a permanent part of
              someone's skin, making precision and care paramount. This
              realization elevated his artistry to a higher level.
            </div>
          </div>
        </div>
        <div className="Minh_Text3">
          <div className="Minh_Text3_Container1">
            <div className="Minh_Text3_Container1_Img"></div>
            <div className="Minh_Text3_Container1_Text">
              This young artist's enthusiasm knows no bounds when it comes to
              tattoo styles. He finds inspiration in a multitude of genres, with
              a simple criterion: if it looks good, it captivates him. This
              constant desire to explore and learn keeps Minh open to new
              artistic horizons.
            </div>
          </div>
          <div className="Minh_Text3_Container2">
            <div className="Minh_Text3_Container2_Text">
              His portfolio proudly showcases his expertise in Black and Grey
              realism, Color Realism, and a deep appreciation for Oriental style
              tattoos. Beyond these specialties, Minh is always ready to embrace
              and excel in any style requested by his clients
            </div>
            <div className="Minh_Text3_Container2_Img"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Minh;
