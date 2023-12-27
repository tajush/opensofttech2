import React from "react";
import image from "../Assets/smart-property.svg";
import arrow from "../Assets/arrow.svg";
import sign from "../Assets/sign.svg";
import { features, features2 } from "../Constants";
import Image from "next/image";
import Link from "next/link";

import sign1 from "@/Assets/sign.svg";


const Features = () => {
  return (
    <section className="container">
     
     
      <div className=" relative py-[150px]  ">
        <h1 className="md:text-[48px] md:leading-[55.68px] text-[35px] leading-[40px] font-semibold mb-[25px]">
          Featured Projects
        </h1>
       
          <Image
            src={sign}
            alt="sign"
            className="w-[167px] h-[17px] absolute top-[16rem] hidden md:block left-[17rem]"
          />
       
        <p className="my-10">
          We make the people and interface interaction more intensive and
          exciting update.
        </p>
        <div>
          {features.map((feature, index) => {
            return (
              <div
                className="bg-[linear-gradient(96deg,#e8fcf8,linen)] hover: shadow-slate-700  hover:border-8
               border-white hover:shadow-2xl transition-all ease-linear   flex flex-col md:flex-row  justify-between px-12 py-8 mb-20"
                key={feature.id}
              >
                <div>
                  <p className="font-medium">{feature.tagName}</p>
                  <h1 className="text-[36px] my-10 hover:text-sky-300 font-semibold">
                    {feature.title}
                  </h1>
                  <div className="flex text-sky-950 font-medium">
                    <button>
                      <Link href={"smart-property"}>View Project</Link>
                    </button>
                    <Image src={arrow} alt="arrow" />
                  </div>
                </div>
                
                  <Image
                    src={feature.image}
                    alt="feature"
                    className="w-[421.1px] h-[265.1px]"
                  />
               
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-20 ">
          {features2.map((feature, index) => {
            return (
              <div
                className="bg-[linear-gradient(96deg,#e8fcf8,linen)] flex flex-col hover:border-8 hover: shadow-slate-700 hover:shadow-2xl transition-all ease-linear border-white px-12 py-8"
                key={feature.id}
              >
                <p className="font-medium">{feature.tagName}</p>
                <h1 className="text-[36px] my-10 font-semibold">
                  {feature.title}
                </h1>
                <div className="flex text-sky-950">
                  <button>View Project</button>
                  <Image src={arrow} alt="arrow" />
                </div>
                <div className="flex justify-end">
                  <Image
                    src={feature.image}
                    alt="feature"
                    className="w-[371.8px] h-[233.46px]"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex sm:justify-center sm:items-center justify-start items-start ">
          <button className=" mt-[80px]  border-[1px] rounded hover:text-white text-[#4285f4] hover:bg-[#4285f4] border-[rgba(66,133,244,.5)] px-[10px] py-[16px]">
            <p className="text-[16px]    font-medium leading-[20px]  ">
              <Link href={"projects"}>View All Projects</Link>
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
