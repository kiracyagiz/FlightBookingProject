import React from "react";
import myImage from "../images/economy.png";
import {GoDotFill} from 'react-icons/go'
const EconomySeats = () => {
  return (
    <div className="w-1/2 ">
      <div className="ımage flex justify-center items-center p-5">
        <img src={myImage} alt="" className="w-[180] h-[100px]" />
      </div>
       {/*  Info Part  */}
      <div className="info ml-12">
        <h1 className="text-lg mb-2">Economy</h1>
        <p className="text-gray-400 text-sm">Rest and recharge during your flight with extended leg room, personalized service, and a multi-course meal service</p>
        <div className="border-t-4 border-purple-400 opacity-80 w-16 my-2 mt-5"></div>
         <div className="mt-5">
            <div className="flex items-center text-center gap-x-6 mb-5 text-sm"><GoDotFill color="purple"/>Built-in entertainment system</div>
            <div className="flex items-center text-center gap-x-6 mb-5 text-sm"><GoDotFill color="purple"/>Complimentary snacks and drinks</div>
            <div className="flex items-center text-center gap-x-6 mb-5 text-sm"><GoDotFill color="purple"/>One free carry-on and personal item</div>
          
          


         </div>
      </div>
    </div>
  );
};

export default EconomySeats;
