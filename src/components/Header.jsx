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
              color: isActive ? 'orange' : '#ecf0f1'
            }
          }
          } to="/service">Services</NavLink></li>
          <li><Link to="#">Project</Link></li>
          <li><NavLink style={({isActive}) => {
            return {
              color: isActive ? 'orange' : '#ecf0f1'
            }
          }
          } to="/about">About</NavLink></li>
           <li><NavLink style={({isActive}) => {
            return {
              color: isActive ? 'orange' : '#ecf0f1'
            }
          }
          } to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      <Link className="cta" to="/login"><button>Login</button></Link>
    </header>

    </div>
  )
}

export default Header