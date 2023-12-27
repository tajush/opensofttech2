import React from "react";
import logo from "../Assets/logo.svg";
import arrow from "../Assets/footer-arrow.svg";
import { footerLinks, socialMedia } from "../Constants";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="flex flex-col  sm:block text-white py-[75px] bg-[#181836] container ">
      <div className="flex justify-around md:flex-row flex-col   pb-[100px]  ">
        <div className="flex-1">
         
            <Image src={logo} alt="logo" className="w-[161px] h-[42px] mb-[25px]" />
          
          <p className="text-[16px] leading-[27.52px] font-medium mb-[25px]">
            A leading IT company dedicated to providing innovative solutions and
            exceptional services. With a strong focus on leveraging technology
            to drive business growth, we empower our clients to stay ahead in
            todays digital landscape.
          </p>
          <div className="flex ">
            {socialMedia.map((social) => {
              return <Image src={social.icon} key={social.id} alt="social" />;
            })}
          </div>
        </div>
        {footerLinks.map((footerLink, index) => {
          return (
            <div className="flex-1" key={footerLink.title}>
              <h1 className="text-[#4583e5] font-semibold text-[20px] mb-[30px]">
                {footerLink.title}
              </h1>
              <ul>
                {footerLink.links.map((link, index) => {
                  return (
                    <li
                      className="leading-[40px] text-[16px] font-medium"
                      key={link.name}
                    >
                      {link.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        <div className="flex-1">
          <h1 className="text-[#4583e5] font-semibold text-[20px] mb-[30px]">
            Newsletter
          </h1>
          <p className="text-[16px] leading-[27.52px] font-medium mb-[25px]">
            Subscribing to our newsletter is quick, easy, and free. Simply
            provide us with your email address, and we will deliver the latest
            technology insights and resources right to your inbox.
          </p>
          <div>
            <button className="flex  text-white text-[14px]  leading-[21.76px] ">
              <div className="bg-[#2f2f4a] block rounded-tl-md rounded-bl-md py-[9px] px-[4.5px]">
                Enter your Email
              </div>
              <div className="bg-[#4583e5] hover:bg-blue-800  rounded-tr-md rounded-br-md py-[9px] px-[20px]">
                Subscribe
              </div>
            </button>
          </div>
         
            <Image
              src={arrow}
              alt="arrow"
              className="w-[208] h-[73px] xl:block hidden"
            />
         
        </div>
      </div>
      <div className="flex sm:justify-center justify-start items-center border-t-[.5px]">
        <p className="text-[14px] py-[40px]">
          © 2023 All Rights Reserved. Developed By OpenSoftTech.
        </p>
      </div>
    </section>
  );
};

export default Footer;
