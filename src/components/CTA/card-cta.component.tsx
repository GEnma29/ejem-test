import React from "react";
// img
import cardImgSM from '../../assets/cta/card/card-cta-sm.png'
import { StarIcon } from "@heroicons/react/24/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const CardCTA: React.FC = () => {
  return (
    <div className="flex py-4 w-full">
      <div className="flex min-w-20 h-20 w-20 lg:w-[134px] lg:h-[134px] bg-blue-300 rounded-lg">
       <img
          className="flex w-full"
          src={cardImgSM}
          alt="Chair"
        />
      </div>
      <div className="flex ml-4 min-w-[224px] lg:w-[392px] items-start  flex-col">
        <div className="flex w-full justify-between items-center "> 
            <h6>Clarifion Air Ionizer</h6>
            <div className="flex space-x-2">
                <p className="text-small text-grey-400">$180</p>
                <p className="text-sm text-blue-300">$84</p>
            </div>
        </div>
        <div className="flex">
        {[0, 1, 2, 3, 4].map((rating) => (
          <StarIcon
            key={rating}
            className={classNames(
              5 > rating ? "text-yellow-400" : "text-gray-300",
              "h-3 w-3 lg:h-4 lg:w-4 flex-shrink-0"
            )}
            aria-hidden="true"
          />
        ))}
        </div>
        <div className="flex justify-center items-center">
            <div className="flex rounded-full h-3 w-3 bg-blue-100 justify-center items-center">
                <div className="flex rounded-full h-1.5 w-1.5 bg-blue-300"></div>
            </div>
            <p className="ml-4 text-xs text-grey-400 ">12 left in Stock</p>
        </div>
        <p className="hidden  text-xs text-grey-400 lg:flex">
            Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
            </p>
      </div>
    </div>
  );
};

export default CardCTA;
