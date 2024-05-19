import React, { useState } from 'react';
import "./AnnouncementModal.css";
import newSvg from "./New.svg";
import PropTypes from 'prop-types';
import configSteps from "../../clientConfig.json";

const AnnouncementModal = ({ page }) => {
  if (configSteps[page]) {
    if (configSteps[page].announcementModal) {
      if (configSteps[page].announcementModal.enabled == true) {
        const questionsAnswers = configSteps[page].announcementModal.questionsAnswers;

        const [isModalVisible, setIsModalVisible] = useState(true);

        const closeModal = () => {
          setIsModalVisible(false); // Update state to hide modal
        };

        const handleModalClick = (e) => {
          e.stopPropagation(); // Prevent propagation of click event to modal background
        };

        const handleBackgroundClick = () => {
          closeModal(); // Close modal when clicking on background
        };

        return (
          <>
            {isModalVisible && (
              <div className="AnnouncementModal-modal" onClick={handleBackgroundClick}>
                <div className="AnnouncementModal-modal-content" onClick={handleModalClick}>
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
            )}
          </>
        );
      }
    } else {
      console.log("The page you are providing is not matching the structure of config file.")
    }
  } else {
    console.log("Please provide a valid page name .")
  }
};

AnnouncementModal.propTypes = {
  page: PropTypes.string.isRequired,
};

export default AnnouncementModal;
