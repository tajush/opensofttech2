import React from "react";
import image from "../Assets/header-banner.svg";
import Button from "./Button";
import sign from "../Assets/sign.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex md:py-[110px] container py-[35px] sm:flex-row flex-col  bg-[linear-gradient(96deg,#e8fcf8,linen)] ">
      <div className="flex-1">
        <h1>
          <span className="sm:text-[66px] text-[35px] leading-[24px] sm:leading-[72.6px] mb-[20px] font-bold text-[#090920]  ">
            Build your
          </span>
          <br />
          <p className=" relative mb-[25px]">
            <span className="sm:text-[90px] text-[45px] leading-[55px] sm:leading-[99px] font-bold   text-[#4583E5]">
              Offshore
            </span>
            <Image
              src={sign}
              alt="sign"
              className="absolute top-[100px] hidden md:block "
            />

            <br className=" md:hidden" />
            <span className="sm:text-[90px] text-[45px] leading-[55px] sm:leading-[99px] font-bold    text-[#090920] ">
              Team
            </span>
          </p>
        </h1>
        <p className="sm:text-[24px] text-[16px] md:leading-[40.32px] leading-[24px] mb-[50px]">
          OpenSoftTech is a leading offshore team provider through which you can
          access the worlds top 10 percentile talents and build your dream tech
          team more efficiently.
        </p>
        <Button title="View Project" />
      </div>

      <div className="flex-1">
        <Image src={image} alt="image" className="w-[457px] h-[413.27px]" />
      </div>
    </section>
  );
};

export default Hero;
