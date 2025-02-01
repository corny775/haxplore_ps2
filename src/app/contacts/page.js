import React from 'react'
import { Navbar } from '../components/Navbar'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function ContactPage () {
  return (
    <div>
        <Navbar/>
        <div className='bg-green-50 w-full h-screen flex pt-16'>
          <div className='flex-auto flex flex-col items-center justify-center'>
            <h1 className="text-7xl font-semibold text-slate-600">Contact Us</h1>
            <div className="mt-8 text-slate-600 bg-green-200 shadow-lg rounded-br-full rounded-tl-full rounded-tr-full px-8 py-4 text-2xl font-semibold hover:bg-green-300 transition duration-300 ease-in-out">
              Get in touch with our team!
            </div>
          </div>
          <div className='h-full w-1/2 flex flex-col justify-center items-end space-y-4 p-8'>
            <div className='shadow-lg bg-green-300 w-full p-12 rounded-full flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
              <div className='text-xl font-medium text-slate-800'>Jai Gauns Dessai</div>
              <div className='text-xl font-medium text-slate-800'>jaistudymail13@gmail.com</div>
              <div className='flex space-x-4'>
                <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'><FaInstagram className='text-4xl text-slate-800 hover:text-purple-600 transition duration-300 ease-in-out' /></a>
                <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'><FaLinkedin className='text-4xl text-slate-800 hover:text-blue-600 transition duration-300 ease-in-out' /></a>
              </div>
            </div>
            <div className='shadow-lg bg-green-300 w-full p-12 rounded-full flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
              <div className='text-xl font-medium text-slate-800'>Sanish Pagui</div>
              <div className='text-xl font-medium text-slate-800'>sanishpagui@gmail.com</div>
              <div className='flex space-x-4'>
                <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'><FaInstagram className='text-4xl text-slate-800 hover:text-purple-600 transition duration-300 ease-in-out' /></a>
                <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'><FaLinkedin className='text-4xl text-slate-800 hover:text-blue-600 transition duration-300 ease-in-out' /></a>
              </div>
            </div>
            <div className='shadow-lg bg-green-300 w-full p-12 rounded-full flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
              <div className='text-xl font-medium text-slate-800'>Konnad Alves</div>
              <div className='text-xl font-medium text-slate-800'>konnadkonnad@gmail.com</div>
              <div className='flex space-x-4'>
                <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'><FaInstagram className='text-4xl text-slate-800 hover:text-purple-600 transition duration-300 ease-in-out' /></a>
                <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'><FaLinkedin className='text-4xl text-slate-800 hover:text-blue-600 transition duration-300 ease-in-out' /></a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
