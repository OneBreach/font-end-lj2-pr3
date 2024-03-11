import { Link } from "react-router-dom";
import PieChart from "../PieChart.tsx/PieChart";
import "./Graphs.css";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";

interface Coin {
  id: number;
  name: string;
  rank: number;
  priceUsd: string;
  volumeUsd24Hr: string;
  supply: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}

interface GraphsProps {
  coins: Coin[];
  onSearch: (searchTerm: string) => void; // Function to handle search updates
}

const Graphs: React.FC<GraphsProps> = ({ coins, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [favoriteCoins, setFavoriteCoins] = useState<Coin[]>([]); // State for favorite coins

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue); // Lowercase for case-insensitive search
    onSearch(searchValue); // Pass search term to onSearch prop
  };

  const addToFavorites = (coin: Coin) => {
    if (!favoriteCoins.find((c) => c.id === coin.id)) {
      setFavoriteCoins([...favoriteCoins, coin]);
    }
  };

  const removeFromFavorites = (coinId: number) => {
    setFavoriteCoins(favoriteCoins.filter((coin) => coin.id !== coinId));
  };

  return (
    <div className="Graphs-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search coins by name..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <header className="Graphs-header">
        <div className="graphs-leftside">
          <PieChart
            data={coins
              .slice(0, 10)
              .map((coin) => ({
                label: coin.name,
                value: Number(coin.volumeUsd24Hr),
              }))}
          />
        <aside>
        <div className="favorites">
  <h2>Favorites    <span className="favorite-icon"><CiHeart /></span></h2>
  <div className="favorite-content">
    <ul className="favorite-list">
      {favoriteCoins.map((coin) => (
        <li key={coin.id}
        >
          <td>{coin.rank}</td>
          <td>{coin.name}</td>
          <td>${parseFloat(coin.priceUsd).toFixed(2)}</td>
          <td
          style={{
            color: parseFloat(coin.changePercent24Hr) > 0 ? "green" : "red",
          }}
          >{parseFloat(coin.changePercent24Hr).toFixed(2)}%</td>
        </li>
      ))}
    </ul>
  </div>
</div>
        </aside>
        </div>
        <section>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Coin Name</th>
                  <th>Volume (24H)</th>
                  <th>Supply</th>
                  <th>Prices (USD)</th>
                  <th>Volume %</th>
                  <th>Favorite</th>
                </tr>
              </thead>
              <tbody>
                {coins
                  .filter((coin) =>
                    coin.name.toLowerCase().includes(searchTerm)
                  ) // Filter coins by name (case-insensitive)
                  .map((coin) => (
                    <tr key={coin.id}>
                      <td>{coin.rank}/100</td>
                      <td className="detail-link">
                        <Link to={`/coin-details/${coin.id}`}>
                          <span className="test">{coin.name}</span>
                        </Link>
                      </td>
                      <td>{parseFloat(coin.volumeUsd24Hr).toFixed(0)}</td>
                      <td>{parseFloat(coin.supply).toFixed(2)}</td>
                      <td>${parseFloat(coin.priceUsd).toFixed(5)}</td>
                      <td
                        style={{
                          color: parseFloat(coin.changePercent24Hr) > 0 ? "green" : "red",
                        }}
                      >
                        {parseFloat(coin.changePercent24Hr).toFixed(4)}%
                      </td>
                      <td>
                        {favoriteCoins.find((c) => c.id === coin.id) ? (
                          <button onClick={() => removeFromFavorites(coin.id)}>remove</button>
                        ) : (
                          <button onClick={() => addToFavorites(coin)}>add</button>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Graphs;
