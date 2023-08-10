import React from "react";
import hwai from "../images/hwai.png";
import Luggage from "../images/Luggage.png";

const PassengerPayment = () => {
  return (
    <div>
      <div>
        <div className=" mt-32 text-left border-2 border-gray-200 border-opacity-70 p-4 ">
          <div className="firstCard flex justify-between m-4 gap-x-8">
            <div>
              <img src={hwai} alt="" />
            </div>
            <div>
              <p className="text-xs md:text-sm">Hawaiian Airlines</p>
              <p className="text-gray-400 text-xs md:text-sm ">FIG4312</p>
            </div>
            <div>
              <p className="text-xs md:text-sm">16h 45m (+1d)</p>
              <p className="text-xs md:text-sm">7:00 AM - 4:15 PM</p>
              <p className="text-xs md:text-sm text-gray-400 md:text-right">
                2h 46m in HNL
              </p>
            </div>
          </div>

          <hr />

          <div className="firstCard flex justify-between m-4 gap-x-8">
            <div>
              <img src={hwai} alt="" />
            </div>
            <div>
              <p className="text-xs md:text-sm">Hawaiian Airlines</p>
              <p className="text-gray-400 text-xs md:text-sm ">FIG4312</p>
            </div>
            <div>
              <p className="text-xs md:text-sm">16h 45m (+1d)</p>
              <p className="text-xs md:text-sm">7:00 AM - 4:15 PM</p>
              <p className="text-xs md:text-sm text-gray-400 md:text-right">
                2h 46m in HNL
              </p>
            </div>
          </div>
        </div>
        <div className="justify-end mt-4">
          <div className="flex gap-x-4 justify-end">
            <p>SubTotal: </p>
            <p>$503</p>
          </div>
          <div className="flex gap-x-4 mt-4 justify-end">
            <p>Taxes and Fees: </p>
            <p>$121</p>
          </div>
          <div className="flex gap-x-4 mt-4 justify-end">
            <p>Total: </p>
            <p>$624</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button className="border-2 border-gray-400 text-gray-400 px-5 py-2 rounded hover:bg-purple-100">Select Seats</button>
      </div>


      <div className="mt-36">
        <img src={Luggage} alt="" />
      </div>
    </div>
  );
};

export default PassengerPayment;
