import React, { SVGProps } from "react";
const HeaderItemComponent: React.FC<{
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  title: string;
}> = ({ Icon, title }) => {
  return (
    <div className="flex justify-center items-center">
      {<Icon />}
      <p className="ml-2 text-xs  text-white-300">{title}</p>
    </div>
  );
};

export default HeaderItemComponent;
