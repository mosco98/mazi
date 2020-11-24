import React from 'react'

import HeaderImg__1 from '../assets/images/IMG_3415-removebg-preview.png'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className="header w-full">
      <NavBar />
      <div className="flex items-center h-full w-full bg-yellow-200">
        <div className="w-2/4 flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center justify-around text-center p-3 h-auto mt-8">
            <h3>OUR ALL-TIME FAVORITES</h3>
            <h1 className="text-6xl font-extrabold my-2">Customs T-shirts & Denim</h1>
            <span className="w-3/5 text-center my-1">
              Bringing back the awareness of the existence of the African culture through quality and affordable wears
            </span>
            <button className="my-5 px-6 py-3 bg-black text-white focus:outline-none">VIEW COLLECTIONS</button>
          </div>
        </div>
        <div className="w-2/4 flex items-end justify-center h-full">
          <img src={HeaderImg__1} alt="Header-1" />
        </div>
      </div>
    </div>
  )
}

export default Header
