import React, { useState, useEffect } from 'react';
import './Graphs.css';

const Graphs: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="Graphs-container">
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <div className="popup-content">
              <p className="welcome-text">Welkom bij Crypto Checker! Om toegang te krijgen tot alle functies en gedetailleerde informatie over cryptocurrencies, kun je doorgaan als gast en direct beginnen met browsen. Klik op 'Doorgaan als gast' om door te gaan naar de website en de huidige crypto-data te bekijken.</p>
              <p className="gast-button" onClick={handleClosePopup}>Doorgaan als gast</p>
            </div>
          </div>
        </div>
      )}
      <header className="Graphs-header">
        <div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <div className="line"></div>
        <div className="top"></div>
      </header>
    </div>
  );
};

export default Graphs;
