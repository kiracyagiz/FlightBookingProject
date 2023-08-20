import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BuyPlace from "./pages/BuyPlace";
import Payment from "./pages/Payment";
import { MainContext } from "../src/context";
import { useState } from "react";
import Complated from "./pages/Complated";

function App() {
  const [firstTabSeat, setFirstTabSeat] = useState("");
  const [secondTabSeat,setSecondTabSeat] = useState('');
  const [index,setIndex] = useState(1);
  const [seatEconomy,setSeatEconomy] = useState(false);
  const[showSecond,setShowSecond] = useState(false);
  const [nextStep,setNextStep] = useState(false);
  const [isBusiness,setIsBusiness] = useState(false);

  const [firstData,setFirstData] = useState(false);
  const [secondData,setSecondData] = useState(false);
  const [payment,setPayment] = useState(502)
  const [counter,setCounter] = useState(0)



  const data = {
    firstTabSeat,
    setFirstTabSeat,
    index,
    setIndex,
    seatEconomy,
    setSeatEconomy,
    secondTabSeat,
    setSecondTabSeat,
    showSecond,
    setShowSecond,
    nextStep,
    setNextStep,
    isBusiness,
    setIsBusiness,
    firstData,
    setFirstData,
    secondData,
    setSecondData,
    payment,
    setPayment,
    counter,
    setCounter
    
  }
  return (
    <MainContext.Provider value={data}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="buy" element={<BuyPlace />}></Route>
          <Route path="/payment" element={<Payment />} />
          <Route path="/complated" element={<Complated/>}></Route>
        </Routes>
      </Router>
    </MainContext.Provider>
  );
}

export default App;
