import React from "react";
import { MainContext, useContext } from "../../context";
const PriceBreakdown = () => {
  const { firstData, secondData } = useContext(MainContext);
  const orValue = firstData || secondData;

  return (
    <div className="mt-4 ">
      <p>Price BreakDown</p>
      <div className="flex max-w-sm justify-between">
        <div className="flex flex-col gap-y-2">
          <p>Departing Flight</p>
          <p>Arriving Flight</p>
          <p>Baggage Fees</p>
          <p className={`${orValue ? "block" : "hidden"}`}>
            Seat Upgrade(business)
          </p>
          <p>Subtotal</p>
          <p>Taxes (9.4%)</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p>$251.50</p>
          <p>$251.50</p>
          <p>$0</p>
          <p className={`${orValue ? "block" : "hidden"}`}>$199</p>
          <p>$702</p>
          <p>$66</p>
        </div>
        
      </div>
      <hr  className="max-w-sm mt-2"/>
      <div className="flex justify-between max-w-sm">
        <p>Amount Paid</p>
        <p className="mr-6">$768</p>
      </div>
      <hr  className="max-w-sm mt-2"/>

      </div>
  );
};

export default PriceBreakdown;
