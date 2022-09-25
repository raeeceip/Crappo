import "./App.css";
import Earnings from "./components/Earnings/Earnings";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Mining from "./components/Mining/Mining";
import Navbar from "./components/Navbar/Navbar";
import Profit from "./components/Profit/Profit";
import Securetrade from "./components/SecureTrade/Securetrade";
import Statistics from "./components/Statitics/Statitics";
import Whycrap from "./components/WhyCrap/Whycrappo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Whycrap />
      <Earnings />
      <Securetrade />
      <Features />
      <Statistics />
      <Profit />
      <Mining />
      <Footer />
    </div>
  );
}

export default App;
