import { useState, useEffect } from "react";
import "./Graphs.css";

const Graphs: React.FC = () => {
  const [coins, setCoins] = useState([]);
  const [limit, setLimit] = useState(20);
  useEffect(() => {
    const fecthCoins = async () => {
      const res = await fetch(
        `https://api.coincap.io/v2/assets?limit=${limit}`
      );
      const data = await res.json();
      console.log(data.data);
      setCoins(data.data);
    };

    fecthCoins();
  });
  return (
    
    <div className="Graphs-container">
      <header className="Graphs-header">
          <div className="graphs-leftside"></div>
        <section>
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>VolumeUsd24Hr</th>
                <th>supply</th>
                <th>Prices (USD)</th>
              </tr>
            </thead>

            <tbody>
              {coins.map(({ id, name, rank, priceUsd, volumeUsd24Hr, supply}) => (
                <tr key={id}>
                  <td>{rank}</td>
                  <td>{name}</td>
                  <td>{parseFloat(volumeUsd24Hr).toFixed(2)}</td>
                  <td>{parseFloat(supply).toFixed(2)}</td>
                  <td>${parseFloat(priceUsd).toFixed(5)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </header>
      <div className="buttons">
            <button onClick={() => setLimit(limit + 20)}>Next</button>
            <button onClick={() => setLimit(20)}>Refresh</button>
          </div>
    </div>
  );
};

export default Graphs;

// import './Graphs.css';

// const Graphs: React.FC = () => {
//   return (
//     <div className="Graphs-container">
//       <header className="Graphs-header">
//         <div>
//           <div className="square"></div>
//           <div className="square"></div>
//         </div>
//         <div className="line"></div>
//         <div className="top"></div>
//       </header>
//     </div>
//   );
// };

// export default Graphs;
