import React, { useState, useRef, useEffect } from "react";
import "./FAQ.scss";
import { FiPlus } from "react-icons/fi";

function FAQ() {
  const [active1, setActive1] = useState(false);
  const contentRef1 = useRef(null);
  useEffect(() => {
    contentRef1.current.style.maxHeight = active1
      ? `${contentRef1.current.scrollHeight}px`
      : "0px";
  }, [contentRef1, active1]);
  const toggleAccordion1 = () => {
    setActive1(!active1);
  };

  const [active2, setActive2] = useState(false);
  const contentRef2 = useRef(null);
  useEffect(() => {
    contentRef2.current.style.maxHeight = active2
      ? `${contentRef2.current.scrollHeight}px`
      : "0px";
  }, [contentRef2, active2]);
  const toggleAccordion2 = () => {
    setActive2(!active2);
  };

  const [active3, setActive3] = useState(false);
  const contentRef3 = useRef(null);
  useEffect(() => {
    contentRef3.current.style.maxHeight = active3
      ? `${contentRef3.current.scrollHeight}px`
      : "0px";
  }, [contentRef3, active3]);
  const toggleAccordion3 = () => {
    setActive3(!active3);
  };

  const [active4, setActive4] = useState(false);
  const contentRef4 = useRef(null);
  useEffect(() => {
    contentRef4.current.style.maxHeight = active4
      ? `${contentRef4.current.scrollHeight}px`
      : "0px";
  }, [contentRef4, active4]);
  const toggleAccordion4 = () => {
    setActive4(!active4);
  };

  const [active5, setActive5] = useState(false);
  const contentRef5 = useRef(null);
  useEffect(() => {
    contentRef5.current.style.maxHeight = active5
      ? `${contentRef5.current.scrollHeight}px`
      : "0px";
  }, [contentRef5, active5]);
  const toggleAccordion5 = () => {
    setActive5(!active5);
  };

  const [active6, setActive6] = useState(false);
  const contentRef6 = useRef(null);
  useEffect(() => {
    contentRef6.current.style.maxHeight = active6
      ? `${contentRef6.current.scrollHeight}px`
      : "0px";
  }, [contentRef6, active6]);
  const toggleAccordion6 = () => {
    setActive6(!active6);
  };

  return (
    <div className="FAQ">
      <div className="FAQText">FREQUENTLY ASKED QUESTION</div>
      <div className="FAQQuesAndAns">
        <button
          className={`question-section ${active1}`}
          onClick={toggleAccordion1}
        >
          <div>
            <div className="question-align">
              <h4 className="question-style">How to book an appointment?</h4>
              <FiPlus
                className={active1 ? `question-icon rotate` : `question-icon`}
              />
            </div>
            <div
              ref={contentRef1}
              className={active1 ? `answer answer-divider` : `answer`}
            >
              <p>You can contact us via phone, Facebook or Insta</p>
            </div>
          </div>
        </button>
        <button
          className={`question-section ${active2}`}
          onClick={toggleAccordion2}
        >
          <div>
            <div className="question-align">
              <h4 className="question-style">
                How old should i be to get a tattoo?
              </h4>
              <FiPlus
                className={active2 ? `question-icon rotate` : `question-icon`}
              />
            </div>
            <div
              ref={contentRef2}
              className={active2 ? `answer answer-divider` : `answer`}
            >
              <p>You must be 18 years old or older</p>
            </div>
          </div>
        </button>
        <button
          className={`question-section ${active3}`}
          onClick={toggleAccordion3}
        >
          <div>
            <div className="question-align">
              <h4 className="question-style">Does tattooing hurt?</h4>
              <FiPlus
                className={active3 ? `question-icon rotate` : `question-icon`}
              />
            </div>
            <div
              ref={contentRef3}
              className={active3 ? `answer answer-divider` : `answer`}
            >
              <p>Just a little bit</p>
            </div>
          </div>
        </button>
        <button
          className={`question-section ${active4}`}
          onClick={toggleAccordion4}
        >
          <div>
            <div className="question-align">
              <h4 className="question-style">How to take care of my tattoo?</h4>
              <FiPlus
                className={active4 ? `question-icon rotate` : `question-icon`}
              />
            </div>
            <div
              ref={contentRef4}
              className={active4 ? `answer answer-divider` : `answer`}
            >
              <p>Don't eat beef</p>
            </div>
          </div>
        </button>
        <button
          className={`question-section ${active5}`}
          onClick={toggleAccordion5}
        >
          <div>
            <div className="question-align">
              <h4 className="question-style">
                Can i offer my sketches to studio?
              </h4>
              <FiPlus
                className={active5 ? `question-icon rotate` : `question-icon`}
              />
            </div>
            <div
              ref={contentRef5}
              className={active5 ? `answer answer-divider` : `answer`}
            >
              <p>Absolutely</p>
            </div>
          </div>
        </button>
        <button
          className={`question-section ${active6}`}
          onClick={toggleAccordion6}
        >
          <div>
            <div className="question-align">
              <h4 className="question-style">How much does a tattoo cost?</h4>
              <FiPlus
                className={active6 ? `question-icon rotate` : `question-icon`}
              />
            </div>
            <div
              ref={contentRef6}
              className={active6 ? `answer answer-divider` : `answer`}
            >
              <p>100$ to 1000$</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default FAQ;
