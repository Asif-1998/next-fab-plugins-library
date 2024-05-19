import React from 'react';
import loudspeakerSvg from "./loudspeaker.svg";
import "./AnnouncementTicker.css";

const AnnouncementTicker = () => {
  //const [rotate, setRotate] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRotate(prevRotate => !prevRotate);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

  return (
    <div className="AnnouncementTicker-container">
      <div className="AnnouncementTicker-title">
        <img src={loudspeakerSvg} alt="Loudspeaker" className="loudspeaker-svg" />
        <span className="AnnouncementTicker-title-text">Announcement</span>
      </div>
      <ul className="AnnouncementTicker-ul">
        <li className="AnnouncementTicker-li">This script calculates the total height needed based on the provided dimensions</li>
        <li className="AnnouncementTicker-li">According to your actual design <span className="AnnouncementTicker-li-link">click here</span></li>
        <li className="AnnouncementTicker-li">63a054b0eca6c7459d2f1ab267d98656e99311d0</li>
      </ul>
    </div>
  );
};

export default AnnouncementTicker;
