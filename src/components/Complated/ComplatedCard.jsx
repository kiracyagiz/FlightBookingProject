import React from "react";

const ComplatedCard = ({ japan }) => {
  return (
    <div className="mt-6 mb-6 border-2 border-gray-200 rounded-lg w-[250px] md:w-[400px] md:min-w-sm shadow-lg ">
      
        <img src={japan} alt=""  className="rounded"/>
        <div className="flex justify-between mt-2 p-3">
            <div>
            <p>Ryokan Japan</p>
            <p className="text-gray-400">Enjoy views of the garden from your room</p>
            </div>
            <p className="text-lg">$439</p>
        </div>
     
    </div>
  );
};

export default ComplatedCard;
