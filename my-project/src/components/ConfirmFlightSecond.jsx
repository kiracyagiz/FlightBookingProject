import React from "react";
import { MainContext,useContext } from "../context";


const ConfirmFlightSecond = () => {

  const{setIndex,setShowSecond,secondTabSeat} = useContext(MainContext)

  const buttonFunc = () => {
    setIndex(2)
    setShowSecond(true)
  }
  return (
    <div className="border h-[90px] mt-10 bg-gray-100 bg-opacity-25 flex justify-between p-5 text-left  ">
      <div className="Passenger">
        <p>Passenger 1</p>
        <p>Sofia Knowles</p>
      </div>
      <div className="seat">
        <p>Seat Number</p>
        <p>{secondTabSeat}</p>
      </div>
      <div className="flex gap-x-10">
        <button className="p-2 border-primary border-2 text-primary rounded hover:bg-gray-200">Save and Close</button>
        <button className={`px-6 bg-gray-200 text-white  rounded ${!secondTabSeat ? 'bg-gray-400' : 'bg-primary'}`} disabled={!secondTabSeat}  onClick={buttonFunc() }>{!secondTabSeat ? 'Next Flight' : 'Payment Method'}</button>
      </div>
    </div>
  );
};

export default ConfirmFlightSecond;
