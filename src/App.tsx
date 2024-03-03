import TopHeader from "./components/TopHeader/TopHeader";
import BottomHeader from "./components/BottomHeader/BottomHeader";
import Graphs from "./components/Graphs/Graphs";
import Footer from "./components/Footer/footer"
import './App.css';

function App() {
  return (
    <div>
      <TopHeader />
      <BottomHeader />
      <Graphs />
      <Footer />
    </div>
  );
}

export default App;