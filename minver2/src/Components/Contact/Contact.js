import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <div className="Contact" id="Contact">
      <div className="ContactText">Contact</div>
      <div className="MapAndInfor">
        <div className="Map">
          <iframe
            className="gg_map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2956.840828539444!2d-98.36777236962942!3d29.522102774213508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cf3339e4553b7%3A0x2e4edb779891b59d!2s1920%20Ponce%20De%20Leon%2C%20San%20Antonio%2C%20TX%2078239%2C%20USA!5e0!3m2!1sen!2s!4v1691640763942!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="Infor">
          <div className="Location">
            <div className="LocationTitle">Hyper Inker Location: </div>
            <div className="LocationText">A B C</div>
          </div>
          <div className="StudioHour">
            <div className="StudioHourTitle">Studio Hour:</div>
            <div className="StudioHourText">Monday - Sunday</div>
          </div>
        </div>
      </div>
      <div className="ContactEnd">
        <div className="ContactLine"></div>
      </div>
    </div>
  );
}

export default Contact;
