import { useEffect, useState } from "react"
import { useParams } from "react-router";

function CoinDetail() {
  let { id } = useParams();
  const [coins, setCoins] = useState([])
  useEffect(() => {
    const fetchCoins = async () => {
        const response = await fetch(`https://api.coincap.io/v2/assets/${id}`)
        const data = await response.json()
        setCoins(data.data);

    };

    fetchCoins()
  })

  return (
    <section>
      <h1>{coins.length}</h1>
      <tbody>
        {coins.map(({ id, name, rank, priceUsd}) => (
          <tr>{id}
            <td>{name}</td>
            <td>{rank}</td>
            <td>{priceUsd}</td>
          </tr>
        ))}
      </tbody>
    </section>
  );
}

export default CoinDetail;
