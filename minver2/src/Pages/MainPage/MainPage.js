import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import "./MainPage.scss";

import Home from "../../Components/Home/Home";
import Artist from "../../Components/Artist/Artist";
import Contact from "../../Components/Contact/Contact";
import FAQ from "../../Components/FAQ/FAQ";

import "../../Components/assets/font/Ramelik.otf";
import Service from "../../Components/Service/Service";

function MainPage() {
  const [faqs, setfaqs] = useState([
    {
      question: "How to book an appointment?",
      answer: "You can contact us via phone, Facebook or Insta",
      open: false,
    },
    {
      question: "How old should i be to get a tattoo?",
      answer: "You must be 18 years old or older",
      open: false,
    },
    {
      question: "Does tattooing hurt?",
      answer: "Just a little bit",
      open: false,
    },
    {
      question: "How to take care of my tattoo?",
      answer: "Don't eat beef",
      open: false,
    },
    {
      question: "Can i offer my sketches to studio?",
      answer: "Absolutely",
      open: false,
    },
    {
      question: "How much does a tattoo cost?",
      answer: "100$ to 1000$",
      open: false,
    },
  ]);
  return (
    <div className="MainPage">
      <div className="MP_Header">
        <Header />
      </div>
      <div className="MP_Home">
        <Home />
      </div>
      <div className="MP_Service">
        <Service />
      </div>
      <div className="MP_Img"></div>
      <div className="MP_Artist">
        <Artist />
      </div>
      <div className="MP_Contact">
        <Contact />
      </div>
      <div className="MP_FAQ">
        <FAQ />
      </div>
    </div>
  );
}

export default MainPage;
