import React from 'react';
import './BottomHeader.css';

const BottomHeader: React.FC = () => {
  return (
    <header>
      <div className="header-container">
        <nav>
          <ul>
            <li><a href="#">Cryptocurrencies</a></li>
            <li><a href="#">Exchanges</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Learn</a></li>
          </ul>
        </nav>
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>
      </div>
      <div className="line"></div>
    </header>
  );
};

export default BottomHeader;