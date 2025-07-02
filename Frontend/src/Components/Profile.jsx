import React from 'react'
import { useNavigate } from 'react-router-dom'
import  './Profile.css'
const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className='profilePage'>
      <div className='row text-center border border-dark m-md-5'>
            <div className='changeColor col-md-3 col-6 border border p-4'>
              <h5>Your Orders</h5>
            </div>
            <div className='changeColor col-md-3 col-6 border border p-4'
            onClick={()=> navigate('/cart')}>
              <h5>Cart</h5>
            </div>
            <div className='changeColor col-md-3 col-6 border border p-4'>
              <h5>Payment</h5>
            </div>
            <div className='changeColor col-md-3 col-6 border border p-4'>
              <h5>Settings</h5>
            </div>
      </div>
    </div>
  )
}

export default Profile
