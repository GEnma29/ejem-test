import React from "react";
import HeaderFragment from "./header.fragment";
// carifion logos
import smallLogo from "../../assets/clarifion/clarifion-sm.png";
import largeLogo from "../../assets/clarifion/clarifion-xl.png";
// mcafee logos
import smallLogoMc from "../../assets/mcaffe/mcAfee-sm.png";
import largeLogoMc from "../../assets/mcaffe/mcAfee-lg.png";
// norton logos 
import smallLogoNorton from "../../assets/norton/norton-sm.png";
import largeLogoNorton from "../../assets/norton/norton-lg.png";






const Header: React.FC = () => {
  return (
    <header className="flex w-screen bg-white">
      <nav
        className="flex w-full flex-col  items-center justify-between"
        aria-label="Global"
      >
        <div
          id="controls-carousel"
          className="flex relative w-full h-[42px] bg-grey-300  "
        >
          <HeaderFragment />
        </div>
        <div className="flex w-full ">
        <div className="flex lg:ml-[7%] w-full  lg:max-w-[1100px] justify-around bg-white ">
          <div className="flex py-[30px] w-full  justify-between items-center">
            <img
              srcSet={`${largeLogo} 600w`}
              src={smallLogo}
              className="max-w-[192px] "
              alt="Logo Clarifion"
            />
            <div className="flex w-[101px] mr-[30px] lg:mr-0 ">
            <img
              srcSet={`${largeLogoMc} 600w`}
              src={smallLogoMc}
              className="flex max-w-[88px] "
              alt="Logo McAfee"
            />
              <img
              srcSet={`${largeLogoNorton} 600w`}
              src={smallLogoNorton}
              className="flex ml-4 lg:ml-8  max-w-[88px] "
              alt="Logo Norton"
            />
            </div>
          </div>
        </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
