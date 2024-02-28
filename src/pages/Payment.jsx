import React, { useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import PaymentMethod from "../components/PaymentMethod";
import CreditCardDetails from "../components/CreditCardDetails";
import CreateAccount from "../components/CreateAccount";
import SignUpOptions from "../components/SignUpOptions";
import CancellationPolicy from "../components/CancellationPolicy";
import Footer from "../components/Footer";
import PassengerPayment from "../components/PassengerPayment";
import PaymentFinal from "../components/PaymentFinal";

const Payment = () => {
  const[isFilled,setIsFilled] = useState(false)
  return (
    <div>
      <HomeNavbar  />

      <div className="m-8 p-8 md:flex w-2/3 justify-between gap-x-[396px]">
        <div>
          <PaymentMethod />

          <CreditCardDetails setIsFilled={setIsFilled}/>
          <SignUpOptions />

          <CancellationPolicy isFilled={isFilled}/>
        </div>

        <div >
        <PaymentFinal isFilled={isFilled}/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
