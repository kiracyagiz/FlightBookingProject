import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MainContext,useContext } from "../context";

const FlightInfoContent = () => {

  const{index} = useContext(MainContext)


  return (
    <div className="bg-seatPrimary flex flex-col sm:flex-row items-center sm:justify-center md:h-24 md:flex md:p-0">
      <div className="location ">
        <div className="text-white text-left p-5">
          <h1 className="text-2xl">SFO</h1>
          <p>California, US</p>
        </div>
      </div>
      <div className=" flex justify-center text-center items-center" > <AiOutlineArrowRight color="white" size={30}/></div>

      <div className="arrive ">
        <div className="text-white text-left p-5">
          <h1 className="text-2xl">NRT</h1>
          <p>Tokyo, JAPAN</p>
        </div>
      </div>

      <div className={`time p-5 text-white  px-10 cursor-pointer ${index == 1? 'bg-primary' : 'bg-seatPrimary'}`}>
        <div className="flex items-center justify-center gap-x-4">
            <p className="text-xl">Feb 25</p>
            <p className="text-xl">7:00 AM</p>
        </div>
        <p className="text-left text-xs mt-2">Departing</p>
      </div>

      <div className={`time p-5 pr-14 text-white  cursor-pointer ${index == 2 ? 'bg-primary' : 'bg-seatPrimary'}`} >
        <div className="flex items-center justify-center gap-x-4">
            <p className="text-xl">Mar 21</p>
            <p className="text-xl">12:15PM</p>
        </div>
        <p className="text-left text-xs mt-2">Arriving</p>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default FlightInfoContent;
