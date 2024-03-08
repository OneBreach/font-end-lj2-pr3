import { useState, useEffect } from "react";
import "./Graphs.css";

const Graphs: React.FC = () => {
  const [coins, setCoins] = useState([]);
  const [limit, setLimit] = useState(300);
  useEffect(() => {
    const fetchCoins = async () => {
      const res = await fetch(
        `https://api.coincap.io/v2/assets?limit=${limit}`
      );
      const data = await res.json();
      console.log(data.data);
      setCoins(data.data);
    };

    fetchCoins();
  }, [limit]); // Vergeet niet om limit toe te voegen aan de afhankelijkheidslijst van useEffect
  return (
    <div className="Graphs-container">
      <header className="Graphs-header">
        <div className="graphs-leftside">

        </div>
        <section>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Coin Name</th>
                  <th>Volume (24)</th>
                  <th>supply</th>
                  <th>Prices (USD)</th>
                  <th>Volume %</th>
                </tr>
              </thead>
              <tbody>
                {coins.map(
                  ({
                    id,
                    name,
                    rank,
                    priceUsd,
                    volumeUsd24Hr,
                    supply,
                    changePercent24Hr,
                  }) => (
                    <tr key={id}>
                      <td>{rank}</td>
                      <td>
                        <span>{name}</span>
                      </td>
                      <td>{parseFloat(volumeUsd24Hr).toFixed(2)}</td>
                      <td>{parseFloat(supply).toFixed(2)}</td>
                      <td>${parseFloat(priceUsd).toFixed(5)}</td>
                      <td
                        style={{
                          color:
                            parseFloat(changePercent24Hr) > 0
                              ? "green"
                              : "red",
                        }}
                      >
                        {parseFloat(changePercent24Hr).toFixed(4)}%
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Graphs;
