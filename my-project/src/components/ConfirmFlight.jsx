import React, { useState } from "react";
import { MainContext,useContext } from "../context";
import Modal from "./Modal";


const ConfirmFlight = () => {
  

  const{firstTabSeat,setIndex,setShowSecond,setNextStep,seatEconomy} = useContext(MainContext)
  const [modalIsOpen,setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const buttonFunc = () => {
    setIndex(2)
    setShowSecond(true)
    setNextStep(true)
    setModalIsOpen(true)
  }
  return (
    <div className="border h-[90px] mt-10 bg-gray-100 bg-opacity-25 flex justify-between p-5 text-left  ">
      <div className="Passenger">
        <p>Passenger 1</p>
        <p>Sofia Knowles</p>
      </div>
      <div className="seat">
        <p>Seat Number</p>
        <p>{firstTabSeat}</p>
      </div>
      <div className="flex gap-x-10">
        <button className="p-2 border-primary border-2 text-primary rounded hover:bg-gray-200" onClick={openModal}>Save and Close</button>
        <button className={`px-6 bg-gray-200 text-white  rounded ${!firstTabSeat ? 'bg-gray-400' : 'bg-primary'}`} disabled={!firstTabSeat}  onClick={buttonFunc}>Next Flight</button>
      </div>
      <Modal isOpen={modalIsOpen} onClose={closeModal}  />

    </div>
  );
};

export default ConfirmFlight;
