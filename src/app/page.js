'use client'

import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Hero from './Hero/page'

export default function page () {

  useEffect(() => {
    if (typeof window !== "undefined") { 
      const locomotiveScroll = new LocomotiveScroll();
      return () => {
          locomotiveScroll.destroy();
      };
  }
  
  })

  return (
    <div className=' w-full h-full'>
      <div>
        <Hero/>
      </div>
    </div>

  )
}
