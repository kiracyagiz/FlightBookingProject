import React, { useState, useEffect } from "react";
import axios from "axios";

const Cards = () => {
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/economoyClass").then((response) => {
      setSeats(response.data);
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
              className={`px-3 py-4 rounded-md ${seat.status ? 'bg-primary cursor-pointer shadow-lg' : 'bg-red-600 '}`}
              onClick={() => console.log(seat.status ? seat.seat : 'Reserved')}
            ></div>
          ))}
          <div className="text-xs text-center mt-2">{dt.row}</div>
          {dt.seats.slice(3, 6).map((seat, seatIndex) => (
            <div key={seatIndex} className={`px-3 py-4 rounded-md ${seat.status ? 'bg-primary cursor-pointer' : 'bg-red-600'}`}onClick={() => console.log(seat.status ? seat.seat : 'Rezerved')}
            ></div>


          ))}
        </div>
      ))}
    </div>
    </div>

  );
};

export default Cards;
