import React from "react";
import Card from "./Card";
import sign from '../Assets/sign.svg'
import Image from "next/image";

const Services = () => {
  return (
    <div className="relative py-[150px] container">
      <h1 className="md:text-[48px] md:leading-[55.68px] text-[35px] leading-[40px] font-semibold mb-[25px]">What We Provide</h1>
      <Image src={sign} alt="sign"  className="w-[167px] h-[17px] hidden md:block absolute top-[16rem] left-[17rem]"/>
      <p className="text-[20px] mb-[25px]">
        We offer a range of services that can be tailored to meet the specific
        needs of our clients. Some of the most common services provided by our
        company include:
      </p>
     
      <Card />
    </div>
  );
};

export default Services;
