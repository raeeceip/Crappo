import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";
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
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Navbar data-aos="fade-up" />
      <Header />
      <Whycrap />
      <Earnings data-aos="fade-left"/>
      <Features data-aos="fade-up" />
      <Statistics data-aos="fade-up" />
      <Securetrade />
      <Profit />
      <Mining />
      <Footer />
    </div>
  );
}

export default App;
