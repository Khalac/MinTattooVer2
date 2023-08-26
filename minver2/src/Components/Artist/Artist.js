import React from "react";
import "./Artist.scss";

function Artist() {
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context("../assets/imgTattoo", false, /\.webp$/)
  );
  let imgArr = [];
  for (let i = 1; i <= 20; ++i) {
    imgArr.push(images[`${i}.webp`]);
  }

  const listImg = imgArr.map((img) => {
    return <img src={img} alt="img" loading="lazy" className="imgTattoos" />;
  });

  return (
    <div className="Artist" id="Artist">
      <div className="ArtistText">Meet Our Artist</div>
      <div className="ImgArtist">
        <div className="ImgArtist1"></div>
        <div className="ImgArtist2"></div>
        <div className="ImgArtist3"></div>
      </div>
      <div className="TattoosPage_img">
        <div className="img1 img"></div>
        <div className="img2 img"></div>
        <div className="img3 img"></div>
        <div className="img4 img"></div>
        <div className="img5 img"></div>
        <div className="img6 img"></div>
        <div className="img7 img"></div>
        <div className="img8 img"></div>
        <div className="img9 img"></div>
        <div className="img10 img"></div>
        <div className="img11 img"></div>
        <div className="img12 img"></div>
        <div className="img13 img"></div>
        <div className="img14 img"></div>
        <div className="img15 img"></div>
        <div className="img16 img"></div>
        <div className="img17 img"></div>
        <div className="img18 img"></div>
        <div className="img19 img"></div>
        <div className="img20 img"></div>
      </div>
      <div className="ArtistEnd">
        <div className="ArtistLine"></div>
      </div>
    </div>
  );
}

export default Artist;
