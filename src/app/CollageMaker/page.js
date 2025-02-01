'use client'

import React, { useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { Navbar } from '../components/Navbar'
import { FaGoogleDrive, FaDropbox } from 'react-icons/fa'

export default function ImageCollageCreator () {
  useEffect(() => {
    document.querySelectorAll('.column-transition').forEach((el) => {
      el.classList.add('column-transition-new')
    })
  }, [])

  const onDrop = useCallback((acceptedFiles) => {
    // Handle the file upload
    console.log(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div>
        <Navbar/>
        <div className='bg-green-50 w-full h-screen flex pt-16'>
          <div className='flex-auto flex flex-col items-center justify-center space-y-8'>
            <h1 className="text-5xl font-semibold text-slate-600">PHOTOS TO ADD ✨MAGIC✨</h1>
            <div 
              {...getRootProps()} 
              className={`p-12 border-2 border-dashed rounded-lg ${isDragActive ? 'border-green-500 bg-green-100' : 'border-gray-300 bg-green-200'}`}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="text-2xl text-slate-600">Drop the files here...</p>
              ) : (
                <p className="text-2xl text-slate-600">Drag & drop some files here, or click to select files</p>
              )}
            </div>
            <div className='flex space-x-4'>
              <button className="text-xl text-slate-800 bg-green-300 px-6 py-2 rounded-full hover:bg-green-400 flex items-center space-x-2">
                <FaGoogleDrive />
                <span>Google Drive</span>
              </button>
              <button className="text-xl text-slate-800 bg-green-300 px-6 py-2 rounded-full hover:bg-green-400 flex items-center space-x-2">
                <FaDropbox />
                <span>Dropbox</span>
              </button>
            </div>
          </div>
          <div className='h-full w-1/2 flex flex-col justify-end items-end space-y-4 pt-4 pb-4'>
            <div id='column-1' className='inline bg-green-300 w-full h-1/5 rounded-full column-transition'></div>
            <div id='column-2' className='inline bg-green-300 w-4/5 h-1/5 rounded-full column-transition'></div>
            <div id='column-3' className='inline bg-green-300 w-8/12 h-1/5 rounded-full column-transition'></div>
            <div id='column-4' className='inline bg-green-300 w-2/4 h-1/5 rounded-full column-transition'></div>
            <div id='column-5' className='inline bg-green-300 w-1/4 h-1/5 rounded-full column-transition'></div>
          </div>
        </div>
    </div>
  )
}
