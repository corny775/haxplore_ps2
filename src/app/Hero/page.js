import React from 'react'
import { Navbar } from '../components/Navbar'

export default function page () {
  return (
    <div>
        <Navbar/>
        <div className='bg-purple-200 w-full h-screen flex items-center'>
            <div className='text-2xl flex flex-col mx-36'>
              <h1 className='text-4xl'>Photo Collage Maker</h1>
              <p className='mt-9 pr-96'>
                Create mesmerizing photo collages online with Fotor's free collage maker in seconds! Upload your images of precious memories and effortlessly transform them into a creative collage art piece using our designer-made collage templates!

                · Free to use

                · Preview without logging in.

                · Export without watermark

                · Customizable layouts and grids
              </p>
            </div>
        </div>
    </div>
  )
}
