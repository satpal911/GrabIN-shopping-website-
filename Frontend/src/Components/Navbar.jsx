import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useCart } from 'react-use-cart'
import { useState } from 'react'

const Navbar = () => {
  const navigate = useNavigate()

  const {items} = useCart()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = () =>{
    if(window.innerWidth <= 576){
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className='navbar navbar-expand-lg bg-dark fixed-top'>
      <div className='container bg-dark p-3 text-light'>

        {/* Logo */}
        <p
          className='navbar-brand logo mb-0 fw-bolder fs-4 text-light'
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          Grab<span className='text-success'>IN</span>
        </p>

        {/* Hamburger Button */}
        <button
          className='navbar-toggler border-0 p-0'
          type='button'
          onClick={toggleMenu}
          aria-controls='navbarNav'
          aria-expanded={isMenuOpen}
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon text-light'><i className="fa-solid fa-bars"></i></span>
        </button>

        {/* Collapsible Menu */}
        <div className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`} id='navbarNav'>
          <ul className='navbar-nav gap-3 align-items-center fs-5'>
            <li className='nav-item '>
              <Link to='/' className='nav-link text-light fw-bold '
              onClick={handleNavClick}>
                <i className='fa-solid fa-store '></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Products' className='nav-link text-light fw-bold'
              onClick={handleNavClick}>Products</Link>
            </li>
            <li className='nav-item'>
              <Link to='/Cart' className='nav-link text-light fw-bold'
              onClick={handleNavClick}>
                <i className='fa-solid fa-cart-shopping'></i><span className='cartTotal bg-danger rounded px-1'>{items.length}</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Profile' className='nav-link text-light fw-bold'
              onClick={handleNavClick}>
                <i className='fa-solid fa-user'></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Register' className='nav-link text-light fw-bold'
              onClick={handleNavClick}>Register</Link>
            </li>
            <li className='nav-item'>
              <Link to='/Admin' className='nav-link text-light fw-bold'
              onClick={handleNavClick}>Admin</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
