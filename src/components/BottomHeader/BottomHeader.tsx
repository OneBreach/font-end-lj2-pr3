import React from 'react';
import './BottomHeader.css';

const BottomHeader: React.FC = () => {
  return (
    <header>
      <div className="header-container">
        <nav>
          <ul>
            <li><a href="#">Exchanges</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Learn</a></li>
            <li><a href="#">NFTs</a></li>
            <li><a href="#">Wallet</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Staking</a></li>
            <li><a href="#">Tokenomics</a></li>
            <li><a href="#">Blockchain-technologie</a></li>
          </ul>
        </nav>
      </div>
      <div className="line"></div>
    </header>
  );
};

export default BottomHeader;
