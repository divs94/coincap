import "./App.css";
import CoinApp from "./components/CoinApp";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <CoinApp />
    </div>
  );
}

export default App;
