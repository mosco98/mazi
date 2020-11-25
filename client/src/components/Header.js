import React from 'react'
import Carousel from 'react-multi-carousel'

import HeaderImg__2 from '../assets/images/IMG_3377-removebg-preview.png'
import HeaderImg__1 from '../assets/images/IMG_3403-removebg-preview.png'
import HeaderImg__3 from '../assets/images/IMG_3415-removebg-preview.png'
import NavBar from './NavBar'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
  // tablet: {
  //   breakpoint: { max: 1024, min: 464 },
  //   items: 2,
  //   slidesToSlide: 2 // optional, default to 1.
  // },
  // mobile: {
  //   breakpoint: { max: 464, min: 0 },
  //   items: 1,
  //   slidesToSlide: 1 // optional, default to 1.
  // }
}

const Header = () => {
  return (
    <div className="header w-full">
      <NavBar />
      <Carousel
        className="h-full w-full"
        arrows={true}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        customTransition="all .5"
        transitionDuration={1000}
        responsive={responsive}>
        <div className="flex items-center w-full bg-yellow-400 slide">
          <div className="w-2/4 flex flex-col items-end justify-center h-full">
            <div className="flex flex-col items-center justify-around text-center p-3 h-auto">
              <h3>OUR GOAL</h3>
              <h1 className="text-6xl font-extrabold my-2">Custom T-shirts & Denims</h1>
              <p className="w-3/5 text-center my-2 text-1xl opacity-50">
                Bringing back the awareness of the existence of the African culture through quality and affordable wears
              </p>
              <button className="my-5 px-6 py-3 bg-black text-white focus:outline-none">VIEW COLLECTIONS</button>
            </div>
          </div>
          <div className="w-2/4 flex items-end justify-center h-full">
            <img src={HeaderImg__1} alt="Header-1" />
          </div>
        </div>
        <div className="flex items-center w-full bg-indigo-100 slide">
          <div className="w-2/4 flex flex-col items-end justify-center h-full">
            <div className="flex flex-col items-center justify-around text-center p-3 h-auto">
              <h3>PROMO!!!</h3>
              <h1 className="text-6xl font-extrabold my-2">30% Discount</h1>
              <p className="w-3/5 text-center my-2 text-1xl opacity-50">
                Get a whopping 30% off any purchase you make on black friday
              </p>
              <button className="my-5 px-6 py-3 bg-black text-white focus:outline-none">SHOP NOW</button>
            </div>
          </div>
          <div className="w-2/4 flex items-end justify-center h-full">
            <img src={HeaderImg__3} alt="Header-1" />
          </div>
        </div>
        <div className="flex items-center w-full bg-gray-200 slide">
          <div className="w-2/4 flex flex-col items-end justify-center h-full">
            <div className="flex flex-col items-center justify-around text-center p-3 h-auto">
              <h3>COMING SOON</h3>
              <h1 className="text-6xl font-extrabold my-2">African kings collection</h1>
              <p className="w-3/5 text-center my-2 text-1xl opacity-50">
                Bringing back the awareness of the existence of the African culture through quality and affordable wears
              </p>
              <button className="my-5 px-6 py-3 bg-black text-white focus:outline-none">JOIN WAITLIST</button>
            </div>
          </div>
          <div className="w-2/4 flex items-end justify-center h-full">
            <img src={HeaderImg__2} alt="Header-1" />
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Header
