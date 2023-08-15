import React, { useState, useEffect } from "react";
import axios from "axios";
import { MainContext,useContext } from "../context";

const Cards = () => {

  const [seats, setSeats] = useState([]);
   const {setFirstTabSeat,setSeatEconomy,nextStep,setSecondTabSeat}= useContext(MainContext)

   const seatHandler = (seat,dt) => {
    seat.status ? nextStep ? setSecondTabSeat(seat.seat)  :  setFirstTabSeat(seat.seat) : console.log('Reserved')  ;
    setSeatEconomy(dt)

    
   }

  useEffect(() => {
    axios.get("http://localhost:5000/api/economoyClass").then((response) => {
      setSeats(response.data);
      console.log('data here')
    });
  }, []);

  return (
    <div className="ml-52 bg-secondary w-max p-5 rounded-xl">
      <div className="  w-max bg-white rounded-xl ">
        {seats.map((dt, i) => (
          <div key={i} className="flex flex-wrap gap-x-3 p-5 ">
            {dt.seats.slice(0, 3).map((seat, seatIndex) => (
              <div
                key={seatIndex}
                className={`px-3 py-4 rounded-md ${
                  seat.status
                    ? dt.businessClass
                      ? "bg-green-500 cursor-pointer shadow-lg" 
                      : "bg-primary cursor-pointer shadow-lg"
                    : "bg-red-600"
                }`}
                onClick={() =>
                 seatHandler(seat,dt.businessClass)

                } 
              ></div>
            ))}
            <div className="text-xs text-center mt-2">{dt.row}</div>
            {dt.seats.slice(3, 6).map((seat, seatIndex) => (
              <div
                key={seatIndex}
                className={`px-3 py-4 rounded-md ${
                  seat.status
                    ? dt.businessClass
                      ? "bg-green-500 cursor-pointer shadow-lg" 
                      : "bg-primary cursor-pointer shadow-lg"
                    : "bg-red-600"
                }`}
                onClick={() =>
                  seatHandler(seat,dt.businessClass)
                }              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
