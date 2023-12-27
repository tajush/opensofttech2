import Image from 'next/image'
import React from 'react'
import img from "@/Assets/about-banner.png";
import sign from "@/Assets/Vector 20.svg";
import HeaderTop from '@/Components/HeaderTop';
import sign1 from '@/Assets/sign.svg'

const page = () => {
  return (
    <div>
        <div className="flex justify-center  items-center ">
        <HeaderTop img={sign1} title={"Get to Know More About Us!"} para={"A brief introduction about OpenSoftTech."}/>
      </div>

      <div className="flex justify-center px-14 items-center mt-[150px] ">
        <div className="  w-full  ">
          <div className="flex flex-col justify-center items-center ">
            
              <Image src={img} alt="img" />
           
            <div className="flex flex-col justify-start items-start  bg-white mt-[-10rem] relative p-[50px] ">
              <h1 className="md:text-[48px] md:leading-[55.68px] text-[35px] leading-[40px] font-semibold mb-[25px]">
                Who We Are
              </h1>
             <Image className="absolute top-[100px] left-[160px] w-[164px] h-[5.58px]" src={sign} alt="sign" />
              <p className="sm:text-[20px] text-[16px] leading-[24px] sm:leading-[24px] max-w-[745px] ">
                OpenSoftTech is a software development team builder based in New
                York. We are a group of dedicated, experienced designers and
                developers who can assist you in finding the ideal offshore
                personnel for the success of your firm. Our network of
                experienced, knowledgeable, innovative, global personnel is
                unrivaled in the industry. We understand that finding the right
                personnel can be challenging, which is why we have built a
                network of experienced, knowledgeable, and innovative
                professionals from around the world. Our team is unrivaled in
                the industry, and we are committed to providing our clients with
                top-quality talent that will help them achieve their business
                goals. At OpenSoftTech, we believe that success is built on
                trust, transparency, and open communication. We work closely
                with our clients to understand their needs and requirements, and
                we use our expertise and experience to find the ideal personnel
                for their projects. We also provide ongoing support to ensure
                that our clients are satisfied with the performance of their
                offshore team. Whether you are looking for designers, developers,
                project managers, or any other type of IT personnel,
                OpenSoftTech can help. Our extensive network of professionals
                includes individuals with a wide range of skills and experience,
                so we can provide you with the ideal team for your specific
                project. If you are looking for a reliable and experienced team
                builder to help you find the ideal offshore personnel, look no
                further than OpenSoftTech. Contact us today to learn more about
                our services and how we can help you achieve your business
                goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default page
