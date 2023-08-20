import React from "react";
import hwai from "../images/hwai.png";
import { MainContext,useContext } from "../context";
import { useNavigate } from "react-router";
const PaymentFinal = ({isFilled}) => {
  const{payment} = useContext(MainContext)
  const taxesandFees = 66;


  const navigate = useNavigate('')



  return (
    <div>
      <div>
        <div className=" mt-32 text-left border-2 border-gray-200 border-opacity-70 p-4 w-[250px] md:w-[400px] ">
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
        <div className={`flex gap-x-4 justify-end  text-sm ${payment == 502 ? 'hidden' : 'block'} mb-4`}>
             <p>Seat Upgrade $199</p>
          </div>
          <div className="flex gap-x-4 justify-end">
            <p>SubTotal: </p>
            <p>${payment}</p>
          </div>
          <div className="flex gap-x-4 mt-4 justify-end">
            <p>Taxes and Fees: </p>
            <p>${taxesandFees}</p>
          </div>
          <div className="flex gap-x-4 mt-4 justify-end">
            <p>Total: </p>
            <p>${payment + taxesandFees}</p>
          </div>
          <button onClick={()=> navigate('/complated')} disabled={!isFilled} className={`py-2 px-6 rounded float-right mt-6 ${isFilled ? 'bg-primary text-white': 'bg-gray-200 border border-gray-400 text-gray-600 cursor-no-drop'} ` }>Confirm and Pay</button>
        </div>
       
      </div>
    </div>
  );
};

export default PaymentFinal;
