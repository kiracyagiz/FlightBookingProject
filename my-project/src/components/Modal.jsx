import React from 'react';
import { useNavigate } from 'react-router';

const Modal = ({ isOpen, onClose }) => {

  const navigate = useNavigate()

  const paymentFunc = () => {
    navigate('/payment')
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div className="fixed inset-0 transition-opacity" onClick={onClose}>
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div className="bg-white rounded-lg p-8 max-w-md mx-auto z-20">
        
        <h2 className="text-xl font-semibold mb-4 text-gray-400">Upgrade Seat</h2>
        <p className='max-w-xs text-sm text-gray-600'>Upgrade your seat for only $199, and enjoy 45 percent more leg room, and seats that recline 40 percent more than economy.</p>
    <div className='flex gap-x-4 float-right'>
    <button
          onClick={onClose}
          className="mt-4 bg-white border-primary border hover:bg-blue-600 text-primary text-sm px-4 py-2 rounded float-right"
        >
          Cancel
        </button>
        <button
          onClick={paymentFunc}
          className="mt-4 bg-primary hover:bg-blue-600 text-white text-sm px-4 py-2 rounded float-right"
        >
          Upgrade for $199
        </button>
    </div>
      </div>
    </div>
  );
};

export default Modal;
