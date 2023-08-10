import React from "react";

const ConfirmFlight = () => {
  return (
    <div className="border h-[90px] mt-10 bg-gray-100 bg-opacity-25 flex justify-between p-5 text-left  ">
      <div className="Passenger">
        <p>Passenger 1</p>
        <p>Sofia Knowles</p>
      </div>
      <div className="seat">
        <p>Seat Number</p>
        <p>9F</p>
      </div>
      <div className="flex gap-x-10">
        <button className="p-2 border-primary border-2 text-primary rounded hover:bg-gray-200">Save and Close</button>
        <button className="px-6 bg-gray-200 text-white  rounded">Next Flight</button>
      </div>
    </div>
  );
};

export default ConfirmFlight;
