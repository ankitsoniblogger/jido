import React from 'react'
import "./Style/Header.css"
import logo from "./Media/jidologo.png"

const Header = () => {
  return (
    <div>
      <header>
      <img src={logo} alt="logo" className="logo" />
      <nav>
        <ul className="nav__links">
          <li><a href="/">Services</a></li>
          <li><a href="#">Project</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
      <a className="cta" href="#"><button>Contact</button></a>
    </header>

    </div>
  )
}

export default Header