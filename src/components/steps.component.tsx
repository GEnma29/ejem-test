import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
const steps = [
  { id: "1", name: "Cart Review", href: "#", status: "complete" },
  { id: "2", name: "Checkout", href: "#", status: "complete" },
  { id: "3", name: "Special Offer", href: "#", status: "current" },
  { id: "4", name: "Confirmation", href: "#", status: "upcoming" },
];
const Steps: React.FC = () => {
  return (
    <nav
      className="flex mt-6 lg:mt-[60px] w-full justify-center items-center "
      aria-label="Progress"
    >
      <ol role="list" className="flex w-[320px] lg:w-[1245px] justify-between ">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className="flex first:mr-1">
            {step.status === "complete" ? (
              <a href={step.href} className="group w-full lg:w-[240px] flex ">
                <span className="flex  flex-col lg:flex-row justify-center items-center  text-sm font-medium">
                  <span className="flex h-5 w-5 lg:h-10 lg:w-10  items-center justify-center rounded-full bg-green-300 group-hover:bg-green-800">
                    <CheckIcon
                      className="h-6 w-6 text-white-100"
                      aria-hidden="true"
                    />
                  </span>
                  <div className="flex ml-[2px]  justify-center items-center">
                    <span className="hidden text-xs lg:ml-2  lg:flex ">
                      Step {step.id}:
                    </span>
                    <span className="flex  mt-2 lg:-mt-0  capitalize text-xs font-medium text-gray-900">
                      {step.name}
                    </span>
                  </div>
                </span>
              </a>
            ) : step.status === "current" ? (
              <a
                href={step.href}
                className="flex flex-col lg:flex-row    lg:w-[240px] items-center text-sm font-medium"
                aria-current="step"
              >
                <span className="flex h-5 w-5 lg:h-10 lg:w-10 flex-shrink-0 items-center justify-center rounded-full border-2 bg-blue-300 border-blue-300">
                  <span className="text-white-100">{step.id}</span>
                </span>
                <div className="flex mt-2 lg:-mt-0 min-w-[75px] justify-center items-center ml-4">
                  <span className="hidden font-bold mr-2 lg:flex ">Step {step.id}:</span>
                  <span className="text-xs  capitalize font-bold text-black">
                    {step.name}
                  </span>
                </div>
              </a>
            ) : (
              <a
                href={step.href}
                className="group flex-col lg:flex-row    flex items-center"
              >
                <span className="flex flex-col lg:flex-row   items-center  text-sm font-medium">
                  <span className="flex h-5 w-5 lg:h-10 lg:w-10  flex-shrink-0 items-center justify-center rounded-full border-2 border-blue-300 group-hover:border-blue-300">
                    <span className="text-blue-300 group-hover:text-blue-300">
                      {step.id}
                    </span>
                  </span>
                  <div className="flex mt-2 lg:-mt-0 w-[74px] lg:w-full justify-center items-center ml-4">
                    <span className="hidden text-xs mr-1 lg:flex">Step {step.id}:</span>
                    <span className="text-sm font-medium text-grey-300 group-hover:text-gray-900">
                      {step.name}
                    </span>
                  </div>
                </span>
              </a>
            )}

            {stepIdx !== steps.length - 1 ? (
              <>{/* Arrow separator for lg screens and up */}</>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Steps;
