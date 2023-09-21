import React from "react";
import FooterLock from "../icons/footer-lock.icon";

const Footer: React.FC = () => {
  return (
    <footer className="flex py-6 flex-wrap w-full bg-grey-300 justify-between items-center">
      <div className="flex p-4">
        <div className="flex w-full justify-center items-center">
          <div className="mt-8 flex divide-x text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            <p className="flex text-sm lg:text-base text-white-100 pr-4">Copyright (c) 2023</p>
            <p className="flex text-sm lg:text-base text-white-100 pl-4">
              Clarifionsupport@clarifion.com
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center min-w-[300px] ">
       <div className="flex justify-center items-center">
        <FooterLock />
        <p className="text-sm ml-2 lg:text-base  text-white-100 ">Secure 256-bit SSL encryption.</p>
       </div>
      </div>
    </footer>
  );
};

export default Footer;
