import React from "react";
import arrow from "../Assets/arrow-circle-right.svg";
import Image from "next/image";

const Button = ({title}) => {
  return (
    <button className="flex outline-none  hover:bg-blue-800 items-center leading-[21.76px] text-[16px] bg-[#4583e5] rounded-[5px] text-white px-[32px]  py-[16px] ">
      <h1>{title}</h1>
      <Image src={arrow} alt="arrow" className=" ml-[10px]" />
    </button>
  );
};

export default Button;
