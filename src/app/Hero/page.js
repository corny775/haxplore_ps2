import React from 'react'
import { Navbar } from '../components/Navbar'

export default function Page () {
  return (
    <div>
        <Navbar/>
        <div className='bg-green-50 w-full h-screen flex pt-16'>
          <div className='flex-auto flex flex-col items-center justify-center'>
            <h1 className=" text-9xl font-semibold text-slate-600">CREATE ART</h1>
            <button className="mt-4 text-slate-600 bg-green-300 shadow-lg rounded-br-full rounded-tl-full rounded-tr-full px-8 py-4 text-2xl font-semibold hover:bg-green-400 transition duration-300 ease-in-out">🖌️ヾ(⌒ー⌒;)ノ</button>
          </div>
          <div className='h-full w-1/2 flex flex-col justify-end items-end space-y-4'>
            <div className='inline bg-green-300 w-1/4 h-1/5 rounded-full'></div>
            <div className='inline bg-green-300 w-2/4 h-1/5 rounded-full'></div>
            <div className='inline bg-green-300 w-8/12 h-1/5 rounded-full'></div>
            <div className='inline bg-green-300 w-4/5 h-1/5 rounded-full'></div>
            <div className='inline bg-green-300 w-full h-1/5 rounded-full'></div>
          </div>
        </div>
    </div>
  )
}

