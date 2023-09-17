import React from "react";
import "./Artist.scss";

import { useNavigate } from "react-router-dom";

function Artist() {
  const nav = useNavigate();
  const LinkToBrother = () => {
    nav("/Minh", { replace: true });
  };
  const LinkToAaron = () => {
    nav("/Aaron", { replace: true });
  };
  const LinkToAnet = () => {
    nav("/Anet", { replace: true });
  };
  const LinkToNicole = () => {
    nav("/Nicole", { replace: true });
  };
  const LinkToBenjamin = () => {
    nav("/Benjamin", { replace: true });
  };
  return (
    <div className="Artist" id="Artist">
      <div className="ArtistText">OUR ARTIST</div>
      <div className="Brother">
        <div className="BrotherImg"></div>
        <div className="BrotherName">
          <div className="BrName">Minh</div>
        </div>
        <div className="BrotherPorfolio" onClick={() => LinkToBrother()}>
          <div className="BrPorfolio">View porfolio</div>
        </div>
      </div>
      <div className="Aaron">
        <div className="AaronImg"></div>
        <div className="AaronName">
          <div className="AaronName">AARON</div>
        </div>
        <div className="AaronPorfolio" onClick={() => LinkToAaron()}>
          <div className="AaronPorfolio">View porfolio</div>
        </div>
      </div>
      <div className="Anet">
        <div className="AnetImg"></div>
        <div className="AnetName">
          <div className="AnetName">ANET</div>
        </div>
        <div className="AnetPorfolio" onClick={() => LinkToAnet()}>
          <div className="AnetPorfolio">View porfolio</div>
        </div>
      </div>
      <div className="Nicole">
        <div className="NicoleImg"></div>
        <div className="NicoleName">
          <div className="NicoleName">NICOLE</div>
        </div>
        <div className="NicolePorfolio" onClick={() => LinkToNicole()}>
          <div className="NicolePorfolio">View porfolio</div>
        </div>
      </div>
      <div className="Benjamin">
        <div className="BenjaminImg"></div>
        <div className="BenjaminName">
          <div className="BenjaminName">BENJAMIN</div>
        </div>
        <div className="BenjaminPorfolio" onClick={() => LinkToBenjamin()}>
          <div className="BenjaminPorfolio">View porfolio</div>
        </div>
      </div>
    </div>
  );
}

export default Artist;
