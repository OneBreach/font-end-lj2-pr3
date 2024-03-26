import { Link } from "react-router-dom";
import PieChart from "../PieChart.tsx/PieChart";
import "./Graphs.css";
import { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { Coin } from "../../types";

interface GraphsProps {
  coins: Coin[];
  onSearch: (searchTerm: string) => void;
}

const Graphs: React.FC<GraphsProps> = ({ coins, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [favoriteCoins, setFavoriteCoins] = useState<Coin[]>(() => {
    const storedFavorites = localStorage.getItem("favoriteCoins");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoriteCoins", JSON.stringify(favoriteCoins));
  }, [favoriteCoins]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);
    onSearch(searchValue);
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
          className="search-bar-input"
          type="text"
          placeholder="Search coins by name..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <header className="Graphs-header">
        <div className="graphs-leftside">
          <PieChart
            data={coins.slice(0, 10).map((coin) => ({
              label: coin.name,
              value: Number(coin.volumeUsd24Hr),
            }))}
          />
          <aside>
            <div className="favorites">
              <h2>
                Favorites{" "}
                <span className="favorite-icon">
                  <CiHeart />
                </span>
              </h2>
              <div className="favorite-content">
                <ul className="favorite-list">
                  {favoriteCoins.map((coin) => (
                    <li key={coin.id}>
                      <td>{coin.rank}</td>
                      <td>{coin.name}</td>
                      <td>${parseFloat(coin.priceUsd).toFixed(2)}</td>
                      <td
                        style={{
                          color:
                            parseFloat(coin.changePercent24Hr) > 0
                              ? "green"
                              : "red",
                        }}
                      >
                        {parseFloat(coin.changePercent24Hr).toFixed(2)}%
                      </td>
                      <td>
                        <div onClick={() => removeFromFavorites(coin.id)}>
                          <MdDeleteOutline />
                        </div>
                      </td>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
        <section className="graph-section">
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
                  )
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
                          color:
                            parseFloat(coin.changePercent24Hr) > 0
                              ? "green"
                              : "red",
                        }}
                      >
                        {parseFloat(coin.changePercent24Hr).toFixed(4)}%
                      </td>




                      <td>
  {favoriteCoins.find((c) => c.id === coin.id) ? (
    <div onClick={() => removeFromFavorites(coin.id)} data-testid="favorite-delete-icon">
      <MdDeleteOutline />
    </div>
  ) : (
    <div onClick={() => addToFavorites(coin)} data-testid="favorite-heart-icon">
      <CiHeart />
    </div>
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
