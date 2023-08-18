import React from "react";
import "./About.scss";

function About() {
  return (
    <div className="About" id="About">
      <div className="AboutText">About Us !!</div>
      <div className="AboutImgAndPara">
        <div className="AboutImg">
          <div className="AboutImgTop"></div>
          <div className="AboutImgBottom"></div>
        </div>
        <div className="AboutPara">
          <p className="para_heading">Hyper Inker</p>
          <p className="para">
            Hi, my name is Minh. I am Vietnamese born (1999) and raised. For the
            past 10 years, nothing has been more important to me than becoming a
            master inker.
          </p>
          <p className="para_heading">My Background</p>
          <p className="para">
            I did my first tattoo when I was 16 and since then I got hooked on
            how to create perfect tattoos. At 18 years old I enrolled in
            university to learn graphic design as I thought it was the right
            path, but 2 years later (2019) I moved to the United States so I was
            unable to complete my degree.
          </p>
        </div>
      </div>
      <div className="AboutEnd">
        <div className="AboutLine"></div>
      </div>
    </div>
  );
}

export default About;
