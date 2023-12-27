import React from "react";
import { business, stats } from "../Constants";
import sign from "../Assets/sign.svg";
import Image from "next/image";

const WhyWe = () => {
  return (
    <div className="pb-[150px] pt-[150px] container">
      <h1 className="md:text-[48px] md:leading-[55.68px]  text-[35px] leading-[40px] font-semibold mb-[25px]">
        Why Choose OpenSoftTech
      </h1>
      <div className=" flex flex-col md:grid  md:grid-cols-[3fr,1fr] md:gap-x-20">
        <div>
          <div className="relative">
           
              <Image
                className="w-[167px] h-[17px] absolute top-[-4rem] left-[25rem] hidden md:block "
                src={sign}
                alt="sign"
              />
         
            <p className="sm:text-[20px] text-[16px] leading-[24px] sm:leading-[24px] max-w-[745px] ">
              Our team comprises multidisciplinary digital product experts:
              experienced product managers, designers, developers, business
              analysts, UI/ UX Designers and marketing experts.
            </p>
          </div>
          <div className=" flex flex-col md:grid md:grid-cols-[1fr,1fr]   sm:py-[50px] py-[20px]    ">
            {business.map((item, index) => {
              return (
                <div className=" flex       " key={item.id}>
                  <figure className="w-[200px] h-[200px]">
                    <Image src={item.icon} alt="icon" />
                  </figure>
                  <div className="ml-[30px]">
                    <h1 className="text-[24px] font-medium ">{item.title}</h1>
                    <p className="text-[16px]">{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-row justify-between  lg:block ">
          {stats.map((state, index) => {
            return (
              <div key={state.id}>
                <h1 className="text-[#4285F4] sm:text-[48px] text-[30px] font-bold  ">
                  {state.value}
                </h1>
                <p className="text-[24px] ">{state.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyWe;
