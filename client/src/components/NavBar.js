import React from 'react'
import { Facebook, Instagram, Phone, Twitter } from 'react-feather'

const NavBar = () => {
  return (
    <nav className="w-full px-4">
      <ul className="py-4">
        <li>
          <a href="/">
            <Instagram size="18" />
          </a>
        </li>
        <li>
          <a href="/">
            <Facebook size="18" />
          </a>
        </li>
        <li>
          <a href="/">
            <Twitter size="18" />
          </a>
        </li>
        <li>
          <a className="flex items-center" href="/">
            <Phone size="18" />
            <span className="ml-1 -mt-1">+2349033955281</span>
          </a>
        </li>
      </ul>
      <div className="main-nav py-4">
        <div className="flex items-center" style={{ margin: '0 8px' }}>
          <h1 className="text-3xl">Logo</h1>
          <ul className="ml-10">
            <li>New arrivals</li>
            <li>Collections</li>
            <li>Promos</li>
            <li>Coming soon</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
