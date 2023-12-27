import Image from 'next/image'
import React from 'react'


const HeaderTop = ({title,para,img}) => {
  return (
    <div className="  w-full bg-[linear-gradient(96deg,#e8fcf8,linen)] ">
          <div className=" flex flex-col justify-center items-center md:leading-[61.6px]  mb-[25px] pt-[150px] pb-[141px]">
            <h1 className='md:text-[56px] text-[35px] leading-[40px] font-semibold text-center '>{title}</h1>
            <Image src={img} alt='img'></Image>
             <p className=' text-[16px] md:text-[20px] md:leading-[32.6px] leading-[24px] text-center '>{para}</p>
          </div>
         
        </div>
  )
}

export default HeaderTop
