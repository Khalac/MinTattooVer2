import React from "react";
import "./Contact.scss";
import { FaLocationDot, FaRegClock, FaMagnifyingGlass } from "react-icons/fa6";
import { BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";

import LogoMap from "../assets/logo/logomap.png";

function Contact() {
  return (
    <div className="Contact" id="Contact">
      <div className="PricingText">
        <div className="Pricing">OUR PRICING</div>
      </div>
      <div className="PricingTable">
        <div className="Minimum">
          <div className="MinimumText">Minimum</div>
          <div className="MinimumPrice">Shop minimum rate start at 80$</div>
        </div>
        <div className="Middle">
          <div className="MiddleText">Middle</div>
          <div className="MiddlePrice">
            Shop hourly middle rate at start at 150$
          </div>
        </div>
        <div className="High">
          <div className="HighText">High</div>
          <div className="HighPrice">
            Shop hourly high rate at start at 200$
          </div>
        </div>
      </div>
      <div className="ContactText">CONTACT</div>
      <div className="ContactInfo">
        <div className="ContactInfoList">
          <div className="AddressInfo">
            <FaLocationDot className="AddressIcon" />
            <div className="AddressText">
              1920 Ponce de Leon, Windcrest, TX 78239
            </div>
          </div>
          <div className="EmailInfo">
            <BsFillEnvelopeFill className="EmailIcon" />
            <div className="EmailText">hyperinker@gmail.com</div>
          </div>
          <div className="PhoneInfo">
            <BsFillTelephoneFill className="PhoneIcon" />

            <div className="PhoneText">(210) 843-4253</div>
          </div>
          <div className="TimeInfo">
            <FaRegClock className="TimeIcon" />

            <div className="TimeText">Mon - Sun . 9am- 2am</div>
          </div>
          <div className="WebInfo">
            <FaMagnifyingGlass className="WebIcon" />

            <div className="WebText">www.hyperinker.com</div>
          </div>
        </div>
        <div className="ContactGoogleMap">
          <img src={LogoMap} className="LogoMap"></img>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.7987789342137!2d-98.3679364!3d29.5222239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f20.1!3m3!1m2!1s0x865cf3339e4553b7%3A0x2e4edb779891b59d!2s1920%20Ponce%20De%20Leon%2C%20San%20Antonio%2C%20TX%2078239%2C%20USA!5e0!3m2!1sen!2s!4v1694917149026!5m2!1sen!2s"
            className="GoogleMap"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
