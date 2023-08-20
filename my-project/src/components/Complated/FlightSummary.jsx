import React from "react";
import hwai from "../../images/hwai.png";
import { MainContext,useContext } from "../../context";

const FlightSummary = () => {

  const {firstTabSeat,secondTabSeat} = useContext(MainContext)
  return (
    <div className="mt-8 flex flex-col gap-y-4 ">
      <h1 className="text-xl text-gray-500 text-bold">Flight Summary</h1>

      <div>
        <p className="mt-4">Departing February 25th,2021</p>

        <div className="flex  gap-y-6 flex-col md:flex md:flex-row md:gap-y-0  mt-4 gap-x-12 border border-gray-300 justify-center items-center rounded px-2 py-3 max-w-2xl">
          <div>
            <img src={hwai} alt="" />
          </div>
          <div className="flex flex-col">
            <p>16h 45m</p>
            <p>Hawaiian Airlines</p>
          </div>
          <div className="flex flex-col">
            <p>7:00AM - 4:15Pm</p>
            <p>value</p>
          </div>
          <div className="flex flex-col">
            <p>1 stop</p>
            <p>2h 45m in HNL</p>
          </div>
          <div className="flex flex-col">
            <p>$624</p>
            <p>round trip</p>
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-2">Seat {firstTabSeat} (economy,window 1 checked bag)</p>



      </div>

      <div>
        <p className="mt-4">Arriving March 21st,2021</p>

        <div className="flex  gap-y-6 flex-col md:flex md:flex-row md:gap-y-0  mt-4 gap-x-12 border border-gray-300 justify-center items-center rounded px-2 py-3 max-w-2xl">
          <div>
            <img src={hwai} alt="" />
          </div>
          <div className="flex flex-col">
            <p>16h 45m</p>
            <p>Hawaiian Airlines</p>
          </div>
          <div className="flex flex-col">
            <p>7:00AM - 4:15Pm</p>
            <p>value</p>
          </div>
          <div className="flex flex-col">
            <p>1 stop</p>
            <p>2h 45m in HNL</p>
          </div>
          <div className="flex flex-col">
            <p>$624</p>
            <p>round trip</p>
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-2">Seat {secondTabSeat} (business, window), 1 checked bag</p>



      </div>
    </div>
  );
};

export default FlightSummary;
