import React from 'react'

import Image from 'next/image'
import arrow from '../Assets/arrow.svg'

const ContinueButton = ({title}) => {
  return (
    <div className='flex   border-[1px] mt-[24px] rounded hover:bg-[#4285f4] hover:text-white border-[rgba(66,133,244,.5)] px-[10px] py-[16px]'>
                    <p className='text-[16px]  font-medium leading-[20px]'>{title}</p>
                    <Image src={arrow} alt="arrow" />
                  
                </div>
  )
}

export default ContinueButton
