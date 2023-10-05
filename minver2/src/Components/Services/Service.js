import React from "react";
import "./Service.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import TattooIcon from "../assets/icon/Tattoo.png";
import PiercingIcon from "../assets/icon/Piercing.png";
import DesignIcon from "../assets/icon/Design.png";

function Service() {
  const nav = useNavigate();

  const LinkToTattoo = () => {
    nav("/Tattoo", { replace: true });
  };
  const LinkToPiercing = () => {
    nav("/Piercing", { replace: true });
  };

  return (
    <div className="Service">
      <div className="ServiceText">
        <div className="ServiceText1">
          Hyper Inker is a tattoo brand been found in 2023 from talented artist.
          We want to build a family and bring you a best service with the best
          work.
        </div>
        <div className="ServiceText2">
          Hyper Inker is a tattoo brand been found in 2023 from talented artist.
          We want to build a family and bring you a best service with the best
          work.
        </div>
      </div>

      <div className="ServiceButtonDiv">
        <Link to="/Service" className="ServiceButton">
          View more
        </Link>
      </div>
      <div className="OurService">OUR SERVICE</div>
      <div className="ServiceDetail">
        <div className="TattooService">
          <div className="TattooServiceImgBor">
            <img
              src={TattooIcon}
              className="TattooServiceImg"
              onClick={() => LinkToTattoo()}
            />
          </div>
          <div className="TattooServiceText">TATTOO</div>
        </div>
        <div className="PiercingService">
          <div className="PiercingServiceImgBor">
            <img
              src={PiercingIcon}
              className="PiercingServiceImg"
              onClick={() => LinkToPiercing()}
            />
          </div>
          <div className="PiercingServiceText">PIERCING</div>
        </div>
        <div className="DesignService">
          <div className="DesignServiceImgBor">
            <img src={DesignIcon} className="DesignServiceImg" />
          </div>
          <div className="DesignServiceText">DESIGN</div>
        </div>
      </div>
    </div>
  );
}

export default Service;
