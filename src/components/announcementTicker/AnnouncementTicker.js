import React, { useState, useEffect } from 'react';
import loudspeakerSvg from "./loudspeaker.svg";
import "./AnnouncementTicker.css";
import PropTypes from 'prop-types';
import configSteps from "../../clientConfig.json";

const AnnouncementTicker = ({ page }) => {
    if (configSteps[page]) {
        if (configSteps[page].announcementTicker) {
            if (configSteps[page].announcementTicker.enabled == true) {
                // State to track the rotation state
                const [rotate, setRotate] = useState(false);
                const annArray = configSteps[page].announcementTicker.items;

                useEffect(() => {
                    // Set up an interval to toggle the rotate state every 2000 milliseconds (2 seconds)
                    const interval = setInterval(() => {
                        // Update the rotate state using the previous value
                        setRotate(prevRotate => !prevRotate);
                    }, 2000);

                    // Clean up the interval when the component unmounts
                    return () => clearInterval(interval);
                }, []);

                // Determine the class name based on the rotate state
                const rotateClassName = rotate ? "rotateLoudspeakerSvg" : "loudspeaker-svg";

                return (
                    <div className="AnnouncementTicker-container">
                        <div className="AnnouncementTicker-title">
                            <img src={loudspeakerSvg} alt="Loudspeaker" className={rotateClassName} />
                            <span className="AnnouncementTicker-dot-outer"></span>
                            <span className="AnnouncementTicker-dot-middle"></span>
                            <span className="AnnouncementTicker-dot-inner"></span>
                            <span className="AnnouncementTicker-title-text">Announcement</span>
                        </div>
                        <ul className="AnnouncementTicker-ul">
                            <li className="AnnouncementTicker-li">{annArray[0]}</li>
                            <li className="AnnouncementTicker-li">{annArray[1]} <span className="AnnouncementTicker-li-link">click here</span></li>
                            <li className="AnnouncementTicker-li">{annArray[2]}</li>
                        </ul>
                    </div>
                );
            }
        } else {
            console.log("The page you are providing is not matching the structure of config file.")
        }
    } else {
        console.log("Please provide a valid page name .")
    }
};

AnnouncementTicker.propTypes = {
    page: PropTypes.string.isRequired,
};

export default AnnouncementTicker;
