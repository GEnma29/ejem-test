import React from "react";
//img
import PaymentMethodsImg from "../../assets/payment-methods/payment-methods.png";
import LockIcon from "../icons/lock.icon";

const PaymentMethods: React.FC = () => {
  return (
    <div className="flex w-full flex-wrap lg:justify-around py-1 lg:py-2 h-[71px] lg:h-[33px] divide-y divide-grey-500 px-4 lg:px-0 border border-grey-500  lg:divide-x lg:divide-y-0 ">
      <div className="flex w-full lg:w-auto justify-around   items-center  py-1 lg:py-0 grid-cols-2 divide-x  divide-grey-500 ">
        <div className="flex w-full  justify-center items-center">
          <p className="text-xs lg:mr-2">Free shipping</p>
        </div>
        <div className="flex w-full min-w-[195px]  justify-center items-center">
          <LockIcon className="ml-2" />
          <p className="text-xs ml-1">Secure 256-bit SSL encryption</p>
        </div>
      </div>
      <div className="flex w-full  lg:w-auto justify-center items-center">
        <img className="lg:ml-2" src={PaymentMethodsImg} alt="paypal" />
      </div>
    </div>
  );
};

export default PaymentMethods;
