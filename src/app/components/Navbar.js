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
      // Animate hamburger bars into "X"
      gsap.to('.bars div:nth-child(1)', {
        rotation: 45,
        translateY: 2,
        y: 6,
        ease: 'power2.inOut',
      })
      gsap.to('.bars div:nth-child(2)', {
        rotation: -45,
        y: -6,
        ease: 'power2.inOut',
      })

      // Show home menu with fade-in effect
      gsap.to('.home', {
        opacity: 1,
        visibility: 'visible', 
        duration: 0.5,
        ease: 'power2.inOut',
      })
    } else {
      // Reset hamburger bars to original state
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

      // Fade-out home menu, then hide it after opacity transition is complete
      gsap.to('.home', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set('.home', { visibility: 'hidden' })
        }
      })
    }
  }, [menu])

  return (
    <div className="bg-white h-[5vw] w-full flex items-center justify-between px-12 fixed z-[999]">
      {/* Logo Section */}
      <div className="">
        <h1 className="text-3xl font-semibold flex">
          <div className="logo">L</div>
          <div className="logo">O</div>
          <div className="logo">G</div>
          <div className="logo">O</div>
        </h1>
      </div>

      {/* Hamburger Icon */}
      <div>
        <div onClick={toggle} className="">
          <button className="bars space-y-1">
            <div className="h-1 w-7 bg-black"></div>
            <div className="h-1 w-7 bg-black"></div>
          </button>
        </div>

        {/* Menu Section - Positioned below the bars */}
        <div className={`home fixed w-80 mt-16 mr-8 right-0`}>
          <ul className="flex flex-col w-full bg-white rounded-3xl">
            <li className="inline-block text-2xl text-center py-5 hover:text-zinc-500">
              <Link href={'/'}>Home</Link>
            </li>
            <div className="inline-block h-[.5px] w-full bg-black"></div>
            <li className="inline-block text-2xl text-center py-5 hover:text-zinc-500">
              <Link href={'#'}>Photo Collage</Link>
            </li>
            <div className="inline-block h-[.5px] w-full bg-black"></div>
            <li className="inline-block text-2xl text-center py-5 hover:text-zinc-500">
              <Link href={'#'}>Collection</Link>
            </li>
            <div className="inline-block h-[.5px] w-full bg-black"></div>
            <li className="inline-block text-2xl text-center py-5 hover:text-zinc-500">
              <Link href={'#'}>About</Link>
            </li>
            <div className="inline-block h-[.5px] w-full bg-black"></div>
            <li className="inline-block text-2xl text-center py-5 hover:text-zinc-500">
              <Link href={'#'}>Contact</Link>
            </li>
            <div className="inline-block h-[.5px] w-full bg-black"></div>
            <div className="text-center mt-12 space-x-16 pb-8">
              <button className="text-2xl bg-cyan-400 p-5 py-2 rounded-full hover:text-white">Log in</button>
              <button className="text-2xl hover:text-zinc-500">Sign Up</button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}
