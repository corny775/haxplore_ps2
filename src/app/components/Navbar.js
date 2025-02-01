'use client'

import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import Link from 'next/link'

export const Navbar = () => {
  const [menu, menuToggle] = useState(false)

  const toggle = () => {
    menuToggle(!menu)
  }

  useEffect(() => {

    if (menu) {
      
      gsap.to('.bars div:nth-child(1)', {
        rotation: 45,
        translateY: 2,
        y:6,
        ease: 'power2.inOut',
      })
      gsap.to('.bars div:nth-child(2)', {
        rotation: -45,
        y:-6,
        ease: 'power2.inOut',
      })

      
      gsap.to('.home', {
        opacity: 1,
        visibility: 'visible', 
        duration: 0.5,
        ease: 'power2.inOut',
      })
    } else {
      
      gsap.to('.bars div:nth-child(1)', {
        rotation: 0,
        translateY: 0,
        ease: 'power2.inOut',
      })
      gsap.to('.bars div:nth-child(2)', {
        rotation: 0,
        translateY: 0,
        ease: 'power2.inOut',
      })

      
      gsap.to('.home', {
        startAt: {opacity: 0},
        visibility: 'hidden', 
        duration: 0.5,
        ease: 'power2.inOut',
      })
    }
  }, [menu]) 

  return (
    <div className="bg-white h-[5vw] w-full flex items-center justify-between px-12 fixed z-[999]">
      <div className="">
        <h1 className="text-3xl font-semibold flex">
          <div className="logo">L</div>
          <div className="logo">O</div>
          <div className="logo">G</div>
          <div className="logo">O</div>
        </h1>
      </div>

      <div onClick={toggle}>
        <button className="bars space-y-1">
          <div className="h-1 w-7 bg-black"></div>
          <div className="h-1 w-7 bg-black"></div>
        </button>
      </div>
      <ul className={`home fixed top-[5vw] left-0 h-screen w-full flex flex-col bg-white transition-all py-32`}>
        <li className="inline-block mx-4 text-5xl text-center py-9"><Link href={'#'}>Home</Link></li>
        <li className="inline-block mx-4 text-5xl text-center py-9"><Link href={'#'}>Photo Collage</Link></li>
        <li className="inline-block mx-4 text-5xl text-center py-9"><Link href={'#'}>About</Link></li>
        <li className="inline-block mx-4 text-5xl text-center py-9"><Link href={'#'}>Contact</Link></li>
      </ul>
    </div>
  )
}
