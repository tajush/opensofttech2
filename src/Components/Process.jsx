import React from "react";
import sign from "../Assets/sign.svg";
import { process } from "../Constants";
import Image from "next/image";

const Process = () => {
  return (
    <div className="relative pt-[75px] container ">
      <h1 className="md:text-[48px] md:leading-[55.68px] text-[35px] leading-[40px] font-semibold mb-[25px]">
        Our Work Process
      </h1>
      
        <Image
          src={sign}
          alt="sign"
          className="w-[167px] h-[17px] hidden md:block absolute top-[10rem] left-[19rem]"
        />
      
      <p className="sm:text-[20px] sm:leading-[31.2px] text-[16px] leading-[24px]  ">
        Throughout this process, we will work closely with the client to ensure
        that they are satisfied with the work and that the project is delivered
        on time and within budget.
      </p>

      <div className=" md:grid md:grid-cols-[1fr,1fr] flex  flex-col xl:flex xl:flex-row   ">
        {process.map((item, index) => {
          return (
            <div className="px-[20px] py-[50px]" key={item.id}>
              <div className="flex justify-start items-center mb-[35px]">
               
                  <Image
                    src={item.icon}
                    className="w-[100px] h-[100px]"
                    alt="icon"
                  />
               
               
                  <Image src={item.image} alt="image" />
                
              </div>
              <div>
                <h1 className="sm:text-[22px] text-[16px] sm:leading-[30.8px] leading-[24px] mb-[12px] font-medium">
                  {item.title}
                </h1>
                <p className="text-[16px]">{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Process;
