/* eslint-disable react/no-unescaped-entities */
import React from "react";
import arrow from "../Assets/down-arrow.svg";
import Button from "./Button";
import Image from "next/image";

const Discussion = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-start container  sm:justify-between sm:items-center bg-[linear-gradient(91.82deg,#eee6ff,#e6f7ff 99.27%)] py-[120px]">
      <div className="max-w-[570px]">
        <p className="sm:text-[48px] sm:leading-[55.68px] text-[35px] leading-[40px] font-semibold mb-[30px]">
          Ready to discuss your project?
        </p>
        <p className="text-[16px] sm:leading-[14px] leading-[24px] mb-[12px]">
          Drop us a line, and we'll get in touch.
        </p>
        <p className="text-[16px] sm:leading-[14px] leading-[24px] ">
         
          We'll see if we're a match and how we can help each other.
        </p>
      </div>
      
        <Image className="xl:block hidden " src={arrow} alt="arrow" />
      

      <div className="pt-4">
        <Button title="ContactUs" />
      </div>
    </div>
  );
};

export default Discussion;
