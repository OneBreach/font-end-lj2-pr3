
import { useEffect, useState } from 'react';
import BottomHeader from '../../components/BottomHeader/BottomHeader';
import Footer from '../../components/Footer/footer';
import Graphs from '../../components/Graphs/Graphs';
import TopHeader from '../../components/TopHeader/TopHeader';
import './App.css';
import Signup from '../../components/Signup/Signup';
import AboutUs from '../../components/AboutUs/AboutUs';
import CryptoIcons from '../../components/CryptoIcons/CryptoIcons';


function App() {
  const [coins, setCoins] = useState([]);
  const [limit] = useState(100);
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
  }, [limit]);
  
  return (
    <div>
      <TopHeader />
      <BottomHeader />
      <Graphs coins={coins} onSearch={function (): void {
        throw new Error('Function not implemented.');
      } }/>
      <AboutUs />
      <Signup/>
      <CryptoIcons />
      <Footer />
    </div>
  );
}

export default App;