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
      <div className="TattoosPage_img">{listImg}</div>
      <div className="ArtistEnd">
        <div className="ArtistLine"></div>
      </div>
    </div>
  );
}

export default Artist;
