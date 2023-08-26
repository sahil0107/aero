import React, { useState } from "react";
import "./App.css";
import ContactPopup from "./Contactpopup";

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="App">
      <div className="left-section">
        <div className="logo">
          <img src="Cat-N-Dog-logo copy.png" alt="Logo" />
          {/* <div className="title">Cat and Dog</div> */}
        </div>
        <div className="heading-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <p className="paragraph">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <div className="logo-container">
          <img src="AppStoreBadge.png" alt="App Store Badge" />
          <img src="google-play-badge.png" alt="Google Play Badge" />
        </div>
      </div>
      <div className="right-section">
        <nav className="navbar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#" onClick={openPopup}>
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {isPopupOpen && <ContactPopup onClose={closePopup} />}
    </div>
  );
}

export default App;
