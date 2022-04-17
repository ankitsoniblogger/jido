import React from 'react'
import "./Style/Header.css"
import logo from "./Media/jidologo.png"
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/">
      <img src={logo} alt="logo" className="logo" /></Link>
      <nav>
        <ul className="nav__links">
          <li><NavLink style={({isActive}) => {
            return {
              color: isActive ? '#0088a9' : '#ecf0f1'
            }
          }
          } to="/service">Services</NavLink></li>
          <li><Link to="#">Project</Link></li>
          <li><NavLink style={({isActive}) => {
            return {
              color: isActive ? '#0088a9' : '#ecf0f1'
            }
          }
          } to="/about">About</NavLink></li>
        </ul>
      </nav>
      <Link className="cta" to="/contact"><button>Contact</button></Link>
    </header>

    </div>
  )
}

export default Header