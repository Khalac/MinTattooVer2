import React from "react";
import "./Contact.scss";
import {
  FaLocationDot,
  FaRegClock,
  FaMagnifyingGlass,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";

import LogoMap from "../assets/logo/logomap.png";

function Contact() {
  const SendEmail = () => {
    console.log("hello");
  };
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
            <FaEnvelope className="EmailIcon" />
            <div className="EmailText">hyperinker@gmail.com</div>
          </div>
          <div className="PhoneInfo">
            <FaPhone className="PhoneIcon" />
            <div className="PhoneText">(210) 843-4253</div>
          </div>
          <div className="TimeInfo">
            <FaRegClock className="TimeIcon" />
            <div className="TimeText">Mon-Sun . 9am - 2am</div>
          </div>
          <div className="WebInfo">
            <FaMagnifyingGlass className="WebIcon" />
            <div className="WebText">www.hyperinker.com</div>
          </div>
        </div>
      </div>
      <div className="ContactMap">
        <img src={LogoMap} className="MapLogo" />

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.7987797855103!2d-98.37051132263657!3d29.522223875190726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f20.1!3m3!1m2!1s0x865cf3339e4553b7%3A0x2e4edb779891b59d!2s1920%20Ponce%20De%20Leon%2C%20San%20Antonio%2C%20TX%2078239%2C%20USA!5e0!3m2!1sen!2s!4v1695112518253!5m2!1sen!2s"
          className="GoogleMap"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="BookingText">NOW BOOKING !!</div>
      <div className="BookingForm">
        <div className="NameForm">
          <div className="NameFormText">NAME:</div>
          <input className="NameFormValue" />
        </div>
        <div className="PhoneForm">
          <div className="PhoneFormText">PHONE:</div>
          <input className="PhoneFormValue" />
        </div>
        <div className="EmailForm">
          <div className="EmailFormText">EMAIL:</div>
          <input className="EmailFormValue" />
        </div>
        <div className="DiscripForm">
          <div className="DiscripFormText">DISCRIPTION:</div>
          <textarea className="DiscripFormValue" rows="2" cols="50" />
        </div>
        <div className="BookingButton">
          <button className="ButtonBooking" onClick={() => SendEmail()}>
            BOOKING
          </button>
        </div>
      </div>
      <div className="BookingDes">
        <div className="BookingDesText">
          Please tell us about your ideas, style, size, color, placement, and
          your budget
        </div>
      </div>
    </div>
  );
}

export default Contact;
