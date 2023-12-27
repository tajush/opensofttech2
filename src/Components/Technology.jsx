import React from "react";
import figma from "../Assets/figma.svg";
import nodejs from "../Assets/nodejs.svg";
import python from "../Assets/python.svg";
import php from "../Assets/php.svg";
import angular from "../Assets/angular.svg";
import devops from "../Assets/devops.svg";
import aws from "../Assets/aws.svg";
import vuejs from "../Assets/vuejs.svg";
import react from "../Assets/react.svg";
import flutter from "../Assets/flutter.svg";
import laravel from "../Assets/laravel.svg";
import googleCloud from "../Assets/google-cloud.svg";
import elasticSearch from "../Assets/elastic-search.svg";
import mongodb from "../Assets/mongo-db.svg";
import svelte from "../Assets/svelte.svg";
import sign from "../Assets/sign.svg";
import Image from "next/image";

const Technology = () => {
  return (
    <div className="py-[150px] bg-[linear-gradient(96deg,#e8fcf8,linen)] container ">
      <div className=" flex flex-col text-center justify-center items-center relative ">
        <h1 className="sm:text-[48px] text-[35px] sm:leading-[55.68px] leading-[40px] font-semibold mb-[25px]">
          Technology Experts In
        </h1>
        
        <Image
          src={sign}
          alt=""
          className="w-[167px] h-[17px] absolute top-[4.5rem] left-[45rem] hidden md:block "
        />
     
        <p className="sm:text-[20px] text-[16px] sm:leading-[31.2px] leading-[24px]  text-center">
          We are technology experts, which means we employ professionals with
          extensive <br /> knowledge and experience in a particular field of
          technology.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center py-[75px]">
        <Image src={figma} alt="figma" />
        <Image src={nodejs} alt="nodejs" />
        <Image src={python} alt="python" />
        <Image src={php} alt="php" />
        <Image src={angular} alt="angular" />
        <Image src={devops} alt="devops" />
        <Image src={aws} alt="aws" />
        <Image src={vuejs} alt="vuejs" />
        <Image src={react} alt="react" />
        <Image src={flutter} alt="flutter" />
        <Image src={laravel} alt="laravel" />
        <Image src={googleCloud} alt="googleCloud" />
        <Image src={elasticSearch} alt="elasticSearch" />
        <Image src={mongodb} alt="mongodb" />
        <Image src={svelte} alt="svelte" />
      </div>
    </div>
  );
};

export default Technology;
