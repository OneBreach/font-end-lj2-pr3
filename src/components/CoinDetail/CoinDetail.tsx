import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Coin } from "../../types";
import { Link } from "react-router-dom";

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
    
    <section>
      <Link to={`/`}>
  <span className="test">terug</span>
</Link>
      <table>
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
    </section>
  );
}

export default CoinDetail;
