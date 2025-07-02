import React from 'react'

const Login = () => {
  return (
    <div className='loginPage'>
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ minHeight: '100vh', paddingTop: '98px', backgroundColor: '#f8f9fa' }}
      >
        <form
          className='bg-dark d-flex flex-column p-3 gap-3 shadow-sm rounded'
          style={{ width: '100%', maxWidth: '400px', minHeight: '600px' }}
        >
          <img
            className='w-100 rounded'
            style={{ height: '200px', objectFit: 'cover' }}
            src="images\pexels-shattha-pilabut-38930-135620.jpg"
            alt="LoginImage"
          />
          <h1 className='text-light text-center fs-5'>Login to your profile</h1>
          <input className='form-control' type="text" placeholder='Enter Phone' />
          <input className='form-control' type="password" placeholder='Enter Password' />
          <button className='btn btn-primary fs-5'>Login</button>
          <p className='text-light text-center small'>
            By continuing, you agree to Meesho’s<br />
            <a href="#" className='text-decoration-underline text-info'>Terms & Conditions</a> and{' '}
            <a href="#" className='text-decoration-underline text-info'>Privacy Policy</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
