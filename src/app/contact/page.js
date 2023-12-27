import HeaderTop from '@/Components/HeaderTop'
import React from 'react'
import sign1 from '@/Assets/sign.svg'

const page = () => {
  return (
    <div className='container'>
        <HeaderTop title="Let's Talk Business!" img={sign1} para="Do you have a project in need of some attention? Fill out the form below and we'll get back to you in a heartbeat ❤️" />
      
    </div>
  )
}

export default page
