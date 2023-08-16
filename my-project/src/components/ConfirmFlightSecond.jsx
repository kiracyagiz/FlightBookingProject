import React, { useEffect, useState } from "react";
import { MainContext,useContext } from "../context";
import Modal from "./Modal";
import { useNavigate } from "react-router";


const ConfirmFlightSecond = () => {

  const navigate = useNavigate()

  const{setIndex,setShowSecond,secondTabSeat,seatEconomy,isBusiness,setIsBusiness,setSecondData,secondData,firstData} = useContext(MainContext)

  const [modalIsOpen,setModalIsOpen] = useState(false);

  

  useEffect(() => {
    setIsBusiness(seatEconomy)
    console.log(firstData,secondData)
  },[seatEconomy])

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }


  useEffect(() => {
    setSecondData(seatEconomy)
  },[seatEconomy])

  const orValue = firstData || secondData

  const buttonFunc = () => {
    setIndex(2)
    setShowSecond(true)
    openModal()
    console.log(orValue,'secondDaam')

    orValue ? openModal() : navigate('/')

  }
  return (
    <div className="border h-[90px] mt-10 bg-gray-100 bg-opacity-25 flex justify-between p-5 text-left  ">
      <div className="Passenger">
        <p>Passenger 1</p>
        <p>Sofia Knowles</p>
      </div>
      <div className="seat">
        <p>Seat Number</p>
        <p>{secondTabSeat}</p>
      </div>
      <div className="flex gap-x-10">
        <button className="p-2 border-primary border-2 text-primary rounded hover:bg-gray-200">Save and Close</button>
        <button className={`px-6 bg-gray-200 text-white  rounded ${!secondTabSeat ? 'bg-gray-400' : 'bg-primary'}`} disabled={!secondTabSeat}  onClick={buttonFunc }>{!secondTabSeat ? 'Next Flight' : 'Payment Method' }</button>
      </div>
      <Modal isOpen={modalIsOpen} onClose={closeModal}  />

    </div>
  );
};

export default ConfirmFlightSecond;
