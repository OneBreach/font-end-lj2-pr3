import React from "react";
import "./TopHeader.css";
import { useState, useEffect } from "react";

const TopHeader: React.FC = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const fecthCoins = async () => {
      const res = await fetch(`https://api.coincap.io/v2/assets?limit=10`);
      const data = await res.json();
      console.log(data.data);
      setCoins(data.data);
    };

    fecthCoins();
  });
  return (
    <header>
      <div className="top-header">
        {coins.map(({ id, name, changePercent24Hr }) => (
          <div key={id} className="coin-data">
            <p className="coin-name">{name}</p>
            <p
              className={`change-percent ${
                changePercent24Hr < 0 ? "negative" : "positive"
              }`}
            >
              <span>{parseFloat(changePercent24Hr).toFixed(3)}%</span>
            </p>
          </div>
        ))}
        <button className="log-in-button"><p>Log in</p></button>
        <button className="sign-up-button"><p>Sign up</p></button>
      </div>
      <div className="line"></div>
    </header>
  );
};

export default TopHeader;
