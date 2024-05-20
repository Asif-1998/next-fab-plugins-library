import React, { useEffect, useRef, useState } from 'react';
import "./AnnouncementModal.css";
import newSvg from "./New.svg";
import PropTypes from 'prop-types';
import configSteps from "../../clientConfig.json";

const AnnouncementModal = ({ page }) => {
  console.log("2",page);
  if (configSteps[page]) {
    if (configSteps[page].announcementModal) {
      if (configSteps[page].announcementModal.enabled == true) {
        const questionsAnswers = configSteps[page].announcementModal.questionsAnswers;

        const [isModalVisible, setIsModalVisible] = useState(true);
        const [isReadMore, setIsReadMore] = useState(true);
        const [isOverflow, setIsOverflow] = useState(false);
        const textRef = useRef(null);

        const closeModal = () => {
          setIsModalVisible(false); // Update state to hide modal
        };

        const handleModalClick = (e) => {
          e.stopPropagation(); // Prevent propagation of click event to modal background
        };

        const handleBackgroundClick = () => {
          closeModal(); // Close modal when clicking on background
        };

        const toggleReadMore = () => {
          setIsReadMore(!isReadMore);
        };

        const lineHeight = 20; // line height in pixels
        const maxLines = 2; // maximum number of lines to show initially
        const maxHeight = lineHeight * maxLines; // calculate max height

        useEffect(() => {
          if (textRef.current.scrollHeight > maxHeight) {
            setIsOverflow(true);
          }
        }, [maxHeight]);

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
                        <p ref={textRef} className="AnnouncementModal-content-p" style={{ maxHeight: isReadMore ? `${maxHeight}px` : 'none', overflow: 'hidden', lineHeight: `${lineHeight}px` }}>
                          {item.answer}
                        </p>
                        {isOverflow && (
                          <button onClick={toggleReadMore} className="AnnouncementModal-toggle-button">
                            {isReadMore ? 'Read More' : 'Read Less'}
                          </button>
                        )}
                        {index !== questionsAnswers.length - 1 && <hr className='AnnouncementModal-horizontal-line' />}
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

const AnnouncementButton = ({ page })=>{

  const [toggleModal, setToggleModal] = useState(false);

  const handleModal = ()=>{
    setToggleModal(!toggleModal); 
  }
  console.log("1",page);

  return(
      <>
       {toggleModal && <AnnouncementModal page={page} />}
        <button onClick={()=>handleModal()} className='ann-modal-bottom-position'>Open Announcement</button>
      </>
  )

}
export default AnnouncementButton;
