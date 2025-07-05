import React from 'react'
import './Payment.css'
import { useLocation } from 'react-router-dom'
const Payment = () => {
    const location = useLocation() //hooks used for getting value like props

     const {type,item,cartTotal} = location.state || {}
     console.log(`received cart total ${cartTotal}`)
     
  return (
    <div className='Payment bg-secondary-subtle shadow-sm d-flex flex-column '
    style={{ width: '100%', maxWidth: '400px', minHeight: '500px', marginTop:'100px', }}>
        <p className='fs-3 m-0 fw-bold'>Grab<span className='text-success'>IN</span></p>
       {type === 'buy' && item && (
  <p className='m-0'>{item.title}</p>
)}

        {type === "checkOut" && (
  <p>Total: ₹ {cartTotal}</p>
)}
       <p>Total: ₹ {type === 'buy' ? item?.price : cartTotal}</p>

        {/* <div>
           <p className='fs-4 text-danger m-0'>Total: ₹ {cartTotal}</p>
        </div> */}
        <div className='d-flex justify-content-between fs-5'>
            <p className='m-0'>Personal information</p><span><i className="fa-solid fa-user-pen"></i></span>
        </div>
        <input className='border-0 p-1 my-1 rounded' type="text" placeholder='Full name' />
        <input className='border-0 p-1 my-1 rounded' type="text" placeholder='Email address' />
        <p className='fs-5 m-0'>Payment method</p>
        <div className='d-flex flex-column gap-2 my-1'>
            <div className='cardPayment d-flex  bg-light  justify-content-between px-2 rounded'>
            <p className='text-secondary'><i className="fa-regular fa-credit-card"></i>Card payment</p>
            <div className='d-flex align-items-center gap-2'>
                <p className='fs-4 m-0 text-primary'><i className="fa-brands fa-cc-visa"></i></p>
                <i class="fs-4 fa-brands fa-cc-paypal text-secondary"></i>
                <i class="fs-4 fa-regular fa-credit-card text-primary"></i>
                </div>
        </div>

        <div className='walletPayment d-flex  bg-light  justify-content-between px-2 rounded'>
            <p className='text-secondary'><i className="fa-solid fa-wallet"></i>Wallet payment</p>
            <div className='d-flex align-items-center gap-2'>
                <p className='fs-4 m-0 text-primary'><i className="fa-solid fa-wallet"></i></p>
                <i class="fs-4 fa-brands fa-apple-pay text-success"></i>
                <i class="fs-4 fa-brands fa-amazon-pay text-secondary"></i>
                <i class="fs-4 fa-brands fa-google-pay"></i>
                </div>
        </div>

        <div className='scanQR d-flex  bg-light  justify-content-between px-2 rounded'>
            <p className='text-secondary'><i className="fa-solid fa-qrcode"></i>Scan QR</p>
            <div className='d-flex align-items-center gap-2'>
                <i class="fa-solid fa-qrcode"></i>
                </div>
        </div>

        </div>
        
        
    </div>
  )
}

export default Payment