import React, { useState } from "react";
import { AiFillCreditCard, AiOutlineGoogle, AiOutlineApple, AiOutlineDollar } from "react-icons/ai";

const PaymentOption = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="  md:flex border-2 rounded md:items-center  gap-x-1 border-primary mt-8 md:w-[580px]">
      {[
        { option: 'Credit Card', icon: <AiFillCreditCard  /> },
        { option: 'Google Play', icon: <AiOutlineGoogle /> },
        { option: 'Apple Pay', icon: <AiOutlineApple /> },
        { option: 'Crypto', icon: <AiOutlineDollar /> }
      ].map(({ option, icon }) => (
        <div
          key={option}
          className={`${
            selectedOption === option ? "bg-primary text-white" : "bg-white text-primary"
          } cursor-pointer flex items-center px-7 text-sm py-1`}
          onClick={() => handleOptionClick(option)}
        >
          <div className="mr-2 py-2">{icon}</div>
          {option}
        </div>
      ))}
    </div>
  );
};

export default PaymentOption;
