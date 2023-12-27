import React from "react";
import Image from "next/image";
import img from "@/Assets/smart-property.png";
import { features } from "@/Constants";

const page = () => {
  return (
    <div>
      <div className="flex justify-center px-14 items-center">
        <div className="max-w-[1400px]  w-full ">
         
            <Image src={img} alt="img" className="w-full" />
        
          <div className="grid grid-cols-[.5fr,3fr] gap-[144.55px] mt-[90px] ">
            <div className="text-[16px] font-semibold leading-[20px]  ">
              <div className="mb-[30px]">
                <p>Project Date:</p>
                <p>10/05/2022</p>
              </div>
              <div className="mb-[30px]">
                <p>Client</p>
                <p>Creative Grow</p>
              </div>
              <div className="mb-[30px]">
                <p>Category</p>
                <p>Art Direction, Graphic</p>
              </div>
              <div>
                <p>Technology & Tools</p>
                <p>Art Direction, Graphic</p>
              </div>
            </div>
            <div>
              {features.map((feature, index) => {
                return (
                  <div key={index}>
                    <h1 className="text-[56px] leading-[67.2px] font-semibold mb-[30px]">
                      {feature.title}
                    </h1>
                    <p className="text-[18px] leading-[30.6px] font-[400]">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using Content here, content here, making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search
                    </p>
                  </div>
                );
              })}
              <div className="flex mt-[80px] gap-[30px]">
                <div>
                  <p className="text-[24px] font-semibold leading-[31.2px]">
                    Project single
                  </p>
                  <p className="text-[18px] font-[400] leading-[30.6px]">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div>
                  <p className="text-[24px] font-semibold leading-[31.2px]">
                    Project single
                  </p>
                  <p className="text-[18px] font-[400] leading-[30.6px]">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div>
                  <p className="text-[24px] font-semibold leading-[31.2px]">
                    Project single
                  </p>
                  <p className="text-[18px] font-[400] leading-[30.6px]">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
