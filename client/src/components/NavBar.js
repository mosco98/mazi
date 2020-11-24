import React from 'react'
import { Facebook, Instagram, Phone, Twitter } from 'react-feather'

const NavBar = () => {
  return (
    <nav className="w-full px-4">
      <ul className="py-2">
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
        <div>
          <h1>Logo</h1>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
