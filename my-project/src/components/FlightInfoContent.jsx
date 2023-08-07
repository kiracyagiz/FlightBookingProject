import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const FlightInfoContent = () => {
  return (
    <div className="bg-seatPrimary  h-24 flex">
      <div className="location">
        <div className="text-white text-left p-5">
          <h1 className="text-2xl">SFO</h1>
          <p>California, US</p>
        </div>
      </div>
      <div className=" flex justify-center text-center items-center" > <AiOutlineArrowRight color="white" size={30}/></div>

      <div className="arrive">
        <div className="text-white text-left p-5">
          <h1 className="text-2xl">NRT</h1>
          <p>Tokyo, JAPAN</p>
        </div>
      </div>

      <div className="time p-5 text-white bg-primary px-10">
        <div className="flex items-center justify-center gap-x-4">
            <p className="text-xl">Feb 25</p>
            <p className="text-xl">7:00 AM</p>
        </div>
        <p className="text-left text-xs mt-2">Departing</p>
      </div>

      <div className="time p-5 text-white  ">
        <div className="flex items-center justify-center gap-x-4">
            <p className="text-xl">Mar 21</p>
            <p className="text-xl">12:15PM</p>
        </div>
        <p className="text-left text-xs mt-2">Arriving</p>
      </div>
    </div>
  );
};

export default FlightInfoContent;
