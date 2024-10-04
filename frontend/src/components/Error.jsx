import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Error = () => {
  return (
    <div
      className="flex w-2/3 mx-auto items-center justify-center h-screen mt-10"
      style={{
        backgroundImage: `url(${assets.error})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', // Ensures the GIF covers the container
        backgroundPosition: 'center', // Centers the background GIF
      }}
    >
      <div className="w-2/3 flex flex-col items-center  bg-opacity-80 p-10 rounded-lg">
        <h1 className="text-5xl md:text-8xl uppercase mt-5 mb-4">Error</h1>
        <p className="text-6xl text-red-500 mb-64 lg:mb-80 pb-80">404</p>
        <NavLink
          to="/"
          className="bg-blue-500 px-4 py-2 -translate-y-48 text-white text-xl rounded hover:bg-blue-600 transition"
          >
          Home
        </NavLink>
      </div>
    </div>
  )
}

export default Error
