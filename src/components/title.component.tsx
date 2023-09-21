import React from "react";

const Title: React.FC<{
  title: string;
  subtitle: string;
}> = ({ title, subtitle }) => {
  return <div className="flex justify-center items-center ">
    <div className="flex flex-col items-center max-w-[320px] lg:max-w-[636px]  ">
      <h1 className="text-black text-center text-3xl lg:text-5xl">{title}</h1>
      <h6 className="mt-6 text-center text-base lg:text-2xl text-grey-200">{subtitle}</h6>
    </div>
  </div>;
};

export default Title;
