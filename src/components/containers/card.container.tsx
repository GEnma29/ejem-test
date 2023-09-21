import React from "react";
// img
import cardImgLg from "../../assets/card/Card-lg.png";
import CommentFragment from "./comment.fragment";
import TitleCTA from "../CTA/titile-cta.component";
import CardCTA from "../CTA/card-cta.component";
import ListCTA from "../CTA/list-cta.component";
import PercentageCTA from "../CTA/percetage-cta.component";
import ButtonCTA from "../CTA/btn.component";
import PaymentMethods from "../CTA/payment-methods";
import Credentials from "../CTA/credentials.component";

const buttonLabel = "No thanks, I don’t want this.";
const CardContainer: React.FC = () => {
  return (
    <div className="flex  justify-around  p-4 flex-wrap w-full lg:w-[1245px] bg-white-200">
      <div className="flex w-full lg:w-6/12 justify-center items-center flex-col">
        <div className="flex w-full lg:hidden ">
          <TitleCTA />
        </div>
        <img
          className="flex w-[320px] h-[328px] lg:w-[575px] lg:h-[591px]"
          src={cardImgLg}
          alt="cladifion charger"
        />
        <CommentFragment />
      </div>
      <div className="flex h-full  flex-col w-full lg:w-6/12 lg:max-w-[550px] justify-center items-center">
        <div className="hidden w-full lg:flex ">
          <TitleCTA />
        </div>
        <CardCTA />
        <p className=" lg:hidden text-sm text-center text-grey-200">
          Simply plug a Clarifion into any standard outlet and replace bulky,
          expensive air purifiers with a simple.
        </p>
        <ListCTA />
        <PercentageCTA />
        <div className="flex uppercase mt-3 lg:mt-8 w-full">
          <ButtonCTA title="Yes - Claim my discount" />
        </div>
        <div className="flex w-full mt-4">
          <PaymentMethods />
        </div>
        <div className="flex w-full justify-center items-center mt-4 lg:mt-5">
          <h5 className="text-xs font-medium	 underline lg:text-lg text-warning-300">
            {buttonLabel.toLocaleUpperCase()}
          </h5>
        </div>
        <div className="flex mt-4 lg:mt-8">
          <Credentials />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
