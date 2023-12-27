import React from 'react'
import Discussion from '@/Components/Discussion';
import Features from '@/Components/Features';

import Hero from '@/Components/Hero'

import Process from '@/Components/Process';
import Services from "@/Components/Services";
import Technology from '@/Components/Technology';
import WhyWe from '@/Components/WhyWe';

const page = () => {
  return (
    <div>
         <Hero />
      <Services />
      <Features />
      <WhyWe />
      <Process />
      <Technology />
      <Discussion />
      
    </div>
  )
}

export default page
