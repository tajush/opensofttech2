import HeaderTop from '@/Components/HeaderTop'
import Services from '@/Components/Services'
import Technology from '@/Components/Technology'
import React from 'react'
import sign1 from '@/Assets/sign.svg'

const page = () => {
  return (
    <div>
      <HeaderTop title={"We Think Big, and Make it  Bigger"} img={sign1} para={"Our diverse range of offerings is designed to cater to a wide variety of requirements and ensure customer satisfaction."} />
        <Services />
        <Technology />

      
    </div>
  )
}

export default page
