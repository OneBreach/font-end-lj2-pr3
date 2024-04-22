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
// dit is een usestate dit zorgt ervoor dat wanneer er een aanpassing is dat die iedere keer dit stukje opnieuw rendert zo kan die zoeken op coins.
  const [searchTerm, setSearchTerm] = useState("");
// usestate favoriete coins bij elke aanpassing slaat die dit op in een local storage =
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
  // als de coin nog niet is toegevoegd aan favoriete coins dan voegt die deze toe
    if (!favoriteCoins.find((c) => c.id === coin.id)) {
  // hier maakt die een kopie van de coin en zet deze in favoriete coins
      setFavoriteCoins([...favoriteCoins, coin]);
    }
  };

  // wanneer een coin een favoriete coin is en deze actie wordt uitgevoerd verwijderd die deze coin uit favorite coins.
  const removeFromFavorites = (coinId: number) => {
    setFavoriteCoins(favoriteCoins.filter((coin) => coin.id !== coinId));
  };

  return (
  // display
    <div className="Graphs-container" data-testid="graphs-container">
      <div className="search-bar">
        <input
          className="search-bar-input"
          type="text"
          placeholder="Search coins by name..."
          value={searchTerm}
  // wanneer deze veranderd gaat die door naar handleSearchChange
          onChange={handleSearchChange}
          data-testid="search-bar-input"
        />
      </div>
      <header className="Graphs-header">
        <div className="graphs-leftside">
          <PieChart
          // dit laat de eerste 10 coins zien
            data={coins.slice(0, 10).map((coin) => ({
          // data die die doorgeeft is de coin naam en de volume usd in 24 h
              label: coin.name,
              value: Number(coin.volumeUsd24Hr),
            }))}
            data-testid="pie-chart"
          />
  {/* dit is de piechart component  */}
          <aside>
            <div className="favorites" data-testid="favorites">
              <h2>
                Favorites{" "}
                <span className="favorite-icon">
                  <CiHeart />
                </span>
              </h2>
              <div className="favorite-content">
                <ul className="favorite-list" data-testid="favorite-list">
                  {favoriteCoins.map((coin) => (
                    <li key={coin.id} data-testid={`favorite-item-${coin.id}`}>
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
                        <div
                          onClick={() => removeFromFavorites(coin.id)}
                          data-testid={`remove-favorite-icon-${coin.id}`}
                        >
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
            <table data-testid="coin-table">
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
                    <tr key={coin.id} data-testid={`coin-row-${coin.id}`}>
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
                          <div
                            onClick={() => removeFromFavorites(coin.id)}
                            data-testid={`remove-favorite-icon-${coin.id}`}
                          >
                            <MdDeleteOutline />
                          </div>
                        ) : (
                          <div
                            onClick={() => addToFavorites(coin)}
                            data-testid={`add-favorite-icon-${coin.id}`}
                          >
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
