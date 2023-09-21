import React from "react";
import Header from "./header-component";
import Title from "../title.component";
import Steps from "../steps.component";
import CardContainer from "../containers/card.container";
import Footer from "./footer.component";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col w-screen h-screen justify-between bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <Header />
        <Title
          title="Wait ! your order in progress."
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing"
        />
        <div className="flex">
        <Steps />
        </div>
        <div className="flex mt-1  lg:mt-10 w-full  justify-center items-center">
          <CardContainer />
        </div>
        <Footer />
      </div>
  );
};

export default Layout;
