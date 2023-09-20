import React, { useState } from "react";
// const 
import { navigation } from "../../const/navigation";
// icons
import ArrowIconLeft from "../icons/arrow-left.icon";
import ArrowIconRight from "../icons/arrow-right.icon";
// components
import HeaderItemComponent from "./header-item.component";

const HeaderFragment: React.FC = () => {
  const [currentLink, setCurrentLink] = useState<number>(0);
  const nextLink = () => {
    setCurrentLink((prev) => (prev < navigation.length - 1 ? prev + 1 : prev));
  };
  const prevLink = () => {
    setCurrentLink((prev) => (prev > 0 ? prev - 1 : prev));
  };
  return (
    <>
      {/** MOBILE */}
      <div className="flex w-full lg:hidden justify-center items-center">
        <div className="flex justify-center items-center space-x-5">
          <ArrowIconLeft onClick={prevLink} />
          <HeaderItemComponent
            Icon={navigation[currentLink].icon}
            title={navigation[currentLink].name}
          />
          <ArrowIconRight onClick={nextLink} />
        </div>
      </div>
      {/** DESKTOP */}
      <div className="hidden lg:flex w-full justify-center items-center">
        <div className="flex justify-center items-center space-x-28">
          {navigation.map((item, index) => (
            <HeaderItemComponent
              Icon={item.icon}
              title={item.name}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HeaderFragment;
