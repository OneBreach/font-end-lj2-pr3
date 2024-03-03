import React from 'react';
import './TopHeader.css';

const TopHeader: React.FC = () => {
  return (
    <header>
      <div className="top-header">
        <nav>
          <div className="data-container">
            <p>Cryptos: <span>2.2M+</span></p>
            <p>Exchanges: <span>711</span></p>
            <p>Market Cap: <span>$2.21T</span></p>
            <p>24h Vol: <span>$111.24B</span></p>
            <p>Dominance: <span>BTC: 52.7% ETH: 18.0%</span></p>
            <p>18.0% ETH Gas: <span>61 Gwei</span></p>
            <p>Fear & Greed: <span>80/100</span></p>
            <p>18.0% ETH Gas: <span>61 Gwei</span></p>
            <p>Fear & Greed: <span>80/100</span></p>
          </div>
        </nav>
      </div>
            <div className="line"></div>
    </header>
  );
};

export default TopHeader;
