import React, { useState } from "react";
import Cards from "../components/Cards";
import SeatSelector from "../components/SeatSelector";
import { MainContext } from "../context";

const BuyPlace = () => {
  const [firstTabSeat, setFirstTabSeat] = useState("");
  const [secondTabSeat,setSecondTabSeat] = useState('');
  const [index,setIndex] = useState(1);
  const [seatEconomy,setSeatEconomy] = useState(false);
  const[showSecond,setShowSecond] = useState(false);
  const [nextStep,setNextStep] = useState(false);
  const [isBusiness,setIsBusiness] = useState(false);

  const [firstData,setFirstData] = useState(false);
  const [secondData,setSecondData] = useState(false);



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
    setSecondData
    
  }


  return (
    <MainContext.Provider value={data}>
      <div className="md:flex">
        <Cards  />
        <SeatSelector  />
      </div>
    </MainContext.Provider>
  );
};

export default BuyPlace;
