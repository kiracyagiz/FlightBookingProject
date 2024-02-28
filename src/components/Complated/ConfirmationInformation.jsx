import React from "react";

const ConfirmationInformation = () => {
  return (
    <div className="mt-8  flex flex-col gap-y-4">
      <h1 className="text-xl text-primary">Bon voyage, Sofia</h1>
      <p className="text-gray-500">Confirmation number: #381029404387</p>
      <p className="max-w-xl text-gray-400">
        Thank you for booking your travel with Tripma! Below is a summary of
        your trip to Narita airport in Tokyo, Japan. We’ve sent a copy of your
        booking confirmation to your email address. You can also find this page
        again in <span className="text-primary cursor-pointer">My trips.</span>
      </p>
    </div>
  );
};

export default ConfirmationInformation;
