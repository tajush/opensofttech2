import React from 'react'
import { card } from '../Constants'
import ContinueButton from './ContinueButton'
import arrow from '../Assets/arrow.svg'
import Image from 'next/image'


const Card = () => {
  return (
    <div className='flex gap-[12px] sm:grid sm:grid-cols-[1fr,1fr] md:flex md:flex-row flex-col  '>
        {card.map((card,index)=>{
            return <div key={card.id} className='border-[1px] hover:border-0 flex-1  text-center hover:bg-[linear-gradient(96deg,#e8fcf8,linen)]  rounded border-[rgba(66,133,244,.5)] bg-[#f5f9fe]  
            flex flex-col   py-[40px] px-[20px] items-center'>
                <h1 className='text-[20px] font-medium mb-[6px]'>{card.title}</h1>
                <Image src={card.icon} alt="icon" className='w-[80px] h-[80px] my-[24px] bg-white'/>
                <p>{card.content}</p>
                <ContinueButton title="Continue reading" img={arrow}  />
                
            </div>
        })}
      
    </div>
  )
}

export default Card
