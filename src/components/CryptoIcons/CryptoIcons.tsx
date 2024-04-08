import React from 'react';
import './CryptoIcons.css';
import { CiBitcoin } from "react-icons/ci";
import { FaEthereum } from "react-icons/fa6";
import { SiTether } from "react-icons/si";
import { SiBinance } from "react-icons/si";
import { TbCurrencySolana } from "react-icons/tb";
import { TbCurrencyDogecoin } from "react-icons/tb";
import { SiCardano } from "react-icons/si";
import { SiBitcoincash } from "react-icons/si";

const CryptoIcons: React.FC = () => {
  return (
    <div className="crypto-icons">
      <CiBitcoin className="crypto-icon" />
      <FaEthereum className="crypto-icon" />
      <SiTether className="crypto-icon" />
      <SiBinance className="crypto-icon" />
      <TbCurrencySolana className="crypto-icon" />
      <TbCurrencyDogecoin className="crypto-icon" />
      <SiCardano className="crypto-icon" />
      <SiBitcoincash className="crypto-icon" />
    </div>
  );
};

export default CryptoIcons;
