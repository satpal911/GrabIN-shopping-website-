import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useCart } from 'react-use-cart'

const Navbar = () => {
  const navigate = useNavigate()

  const {totalItems} = useCart()

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
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon text-light'><i className="fa-solid fa-bars"></i></span>
        </button>

        {/* Collapsible Menu */}
        <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
          <ul className='navbar-nav gap-3 align-items-center fs-5'>
            <li className='nav-item'>
              <Link to='/' className='nav-link text-light fw-bold'>
                <i className='fa-solid fa-store'></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Products' className='nav-link text-light fw-bold'>Products</Link>
            </li>
            <li className='nav-item'>
              <Link to='/Cart' className='nav-link text-light fw-bold'>
                <i className='fa-solid fa-cart-shopping'></i><span className='cartTotal bg-danger rounded px-1'>{totalItems}</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Profile' className='nav-link text-light fw-bold'>
                <i className='fa-solid fa-user'></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Register' className='nav-link text-light fw-bold'>Register</Link>
            </li>
            <li className='nav-item'>
              <Link to='/Admin' className='nav-link text-light fw-bold'>Admin</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
