import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Coin } from "../../types";
import { Link } from "react-router-dom";
import './CoinDetail.css';
import { FaBackspace } from "react-icons/fa";

function CoinDetail() {
  let { id } = useParams();
  const [coin, setCoins] = useState<Coin>();
  useEffect(() => {
    const fetchCoins = async () => {
      const response = await fetch(`https://api.coincap.io/v2/assets/${id}`);
      const data = await response.json();
      setCoins(data.data);
    };

    fetchCoins();
  });

  return (
    
    <section className="coin-detail-section">
            <Link to={`/`}>
  <span className="back-button"><FaBackspace /></span>
</Link>
      <div className="coin-detail-table"></div>
      <table className="table-coin-detail">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin Name</th>
            <th>Prices (USD)</th>
            <th>Volume %</th>
            <th>Supply</th>
            <th>Volume (24H)</th>
            <th>VWap24Hr</th>
          </tr>
        </thead>
        {coin && (
          <>
            <tbody>
              <tr>
                <td>{coin.rank}</td>
                <td>{coin.name}</td>
                <td>{coin.priceUsd}</td>
                <td>{coin.changePercent24Hr}</td>
                <td>{coin.supply}</td>
                <td>{coin.volumeUsd24Hr}</td>
                <td>{coin.vwap24Hr}</td>
              </tr>
            </tbody>
          </>
        )}
      </table>
      <div className="coin-detail-table"></div>
    </section>
  );
}

export default CoinDetail;
