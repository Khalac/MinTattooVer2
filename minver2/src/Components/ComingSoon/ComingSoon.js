import React from "react";
import { useState } from "react";
import axios from "axios";

import "./ComingSoon.scss";
import bg from "../assets/imgComingSoon/4.webp";
import bgpc from "../assets/imgComingSoon/bgpc.webp";
import logo from "../assets/imgComingSoon/2.webp";
import Name from "../assets/imgComingSoon/3.webp";

import fb from "../assets/imgComingSoon/7.webp";
import ins from "../assets/imgComingSoon/6.webp";
import phone from "../assets/imgComingSoon/5.webp";
import email from "../assets/imgComingSoon/8.webp";

import { notification } from "antd";

function ComingSoon() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  window.addEventListener("resize", () => {
    // làm tương tự 2 bước đã làm
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  const [mail, setMail] = useState("");
  console.log(mail);

  const SendEmail = async () => {
    await axios
      .post("https://min-tattoo-ver2-ntaj.vercel.app/Email", {
        mail,
      })
      .then((res) => {
        console.log(res);
        if (res.data.onSuccess) {
          console.log("Sucess");
          openNotificationWithIconSuc("success");
        }
      })
      .catch((err) => console.log("error", err));
  };

  const openNotificationWithIconSuc = (type) => {
    notification[type]({
      message: "Success",
      description: "Sent email successfully!",
    });
  };
  const isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
  return (
    <div className="ComingSoon">
      <img src={isMobile ? bgpc : bg} alt="" className="ComingSoon_Bg" />
      <div className="ComingSoon_Logo">
        <img src={logo} alt="" className="Logo_Img_cms" />
        <img src={Name} alt="" className="Name_Img" />
      </div>
      <div className="ComingSoon_Text">
        <div className="ComingSoon_Text1">WE'RE HYPED</div>
        <div className="ComingSoon_Text2">TO GET YOU INKED</div>
      </div>
      <div className="ComingSoon_describe">
        <div className="ComingSoon_describe_Text">
          {" "}
          Discover bold tattoo and piercing ideas from Hyper Inkers the town's
          best studio, bringing your creative to life
        </div>
      </div>
      <div className="ComingSoon_Email">
        <input
          className="EmailFormValue_ComingSoon"
          placeholder="Enter your mail adress.."
          onChange={(values) => setMail(values.target.value)}
        />
        <div
          className="EmailFormValue_ComingSoon_button"
          onClick={() => SendEmail()}
        >
          NOTIFY US
        </div>
      </div>
      <div className="ComingSoon_Contact">
        <div className="ComingSoon_Contact_Text">Follow us for update</div>
        <div className="ComingSoon_Contact_Icon">
          <img
            src={fb}
            className="ComingSoon_Contact_Icon1"
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=61551762555399",
                "_blank",
                "rel=noopener noreferrer"
              )
            }
          />
          <img
            src={ins}
            className="ComingSoon_Contact_Icon2"
            onClick={() =>
              window.open(
                "https://www.instagram.com/hyperinkers/",
                "_blank",
                "rel=noopener noreferrer"
              )
            }
          />
          <img src={phone} className="ComingSoon_Contact_Icon3" />
          <img src={email} className="ComingSoon_Contact_Icon4" />
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
