import Features from '@/Components/Features'
import ProjectTab from '@/Components/ProjectTab'
import ProjectTab from '@/Components/HeaderTop'


import React from 'react'

const page = () => {
  return (
    <div>
       <HeaderTop
        title="Our Projects"
        img={sign1}
        para="Our experienced team of designers & developers are eager to assist you on your path to success."
      />
       <ProjectTab />

      <Features />
      
    </div>
  )
}

export default page
