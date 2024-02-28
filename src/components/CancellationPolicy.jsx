import React from "react";
import { useNavigate } from "react-router";
const CancellationPolicy = ({ isFilled }) => {

  const navigate = useNavigate();
  return (
    <div className="mt-8">
      <p className="text-gray-500">Cancellation Policy</p>
      <p className="text-sm w-[200px] md:w-[600px] mt-6 text-gray-500">
        This flight has a flexible cancellation policy. If you cancel or change
        your flight up to 30 days before the departure date, you are eligible
        for a free refund. All flights booked on Tripma are backed by our
        satisfaction guarantee, however cancellation policies vary by airline.
        See the full{" "}
        <span className="text-primary cursor-pointer">cancellation policy</span>{" "}
        for this flight.
      </p>

      <div className="mt-4 flex gap-x-6">
        <button className="border border-primary text-primary rounded py-2 px-4" onClick={() =>navigate('/buy')}>Back to Seat Select</button>
        <button onClick={()=> navigate('/complated')} className={`py-2 px-6 rounded ${isFilled ? 'bg-primary text-white': 'bg-gray-200 border border-gray-400 text-gray-600 cursor-no-drop'}`}>Confirm and Pay</button>
      </div>
    </div>
  );
};

export default CancellationPolicy;
