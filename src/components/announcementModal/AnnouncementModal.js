import React from 'react';
import "./AnnouncementModal.css";
import newSvg from "./New.svg";

const AnnouncementModal = () => {

  const questionsAnswers = [
    { button: "my button", question: "Data types in JavaScript?", answer: "Data types in JavaScript define the data type that a variable can store. JavaScript includes primitive and non-primitive data types." },
    { button: "my button", question: "Object-oriented programming (OOP)?", answer: "OOP is a programming paradigm that allows us to model real-world objects in our code. OOP in JavaScript is based on creating objects that have properties (features) and methods (functions that can perform actions)." },
    { button: "my button", question: "Scope?", answer: "Scope determines the accessibility of variables, objects, and functions from different parts of the code." },
    { button: "my button", question: "Functions in JavaScript?", answer: "Functions are blocks of reusable code that perform a specific task. In JavaScript, functions are first-class objects, which means they can be passed around like any other value." },
    { button: "my button", question: "Arrays in JavaScript?", answer: "Arrays are special types of objects that store multiple values in a single variable. They are used to store collections of data, such as lists of items or sets of values." },
    { button: "my button", question: "Conditional statements in JavaScript?", answer: "Conditional statements are used to execute different code based on different conditions. The most common conditional statements in JavaScript are if, else if, and else." },
    { button: "my button", question: "Loops in JavaScript?", answer: "Loops are used to execute the same block of code repeatedly until a specified condition is met. JavaScript supports several types of loops, including for, while, and do-while loops." }
  ];

  const closeModal = () => {
    console.log("closed");
  }

  return (
    <>
      <div className="AnnouncementModal-modal">
        <div className="AnnouncementModal-modal-content">
          <div className="AnnouncementModal-modal-header">
            <img src={newSvg} alt="icon" className="AnnouncementModal-new-img" />
            <h2 className="AnnouncementModal-modal-title">Announcements!!!</h2>
            <span className="AnnouncementModal-close" onClick={closeModal}>×</span>
          </div>
          <div className="AnnouncementModal-modal-body">
            {questionsAnswers.map((item, index) => (
              <div key={index} className="AnnouncementModal-content-div">
                <button className="AnnouncementModal-content-button">{item.button}</button>
                <h3 className="AnnouncementModal-content-h3">{item.question}</h3>
                <p className="AnnouncementModal-content-p">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementModal;