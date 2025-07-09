import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const Register = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })

  const getRegisterApi = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post("http://localhost:4000/api/register",form)
      console.log(res.data);
      navigate('/')
      console.log("User register successfully")
    } catch (error) {
      console.log(`email already registered ${error}`)
    }
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
    console.log(form);
    
  }

 
  return (
    <div className='registerPage'>
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', paddingTop:'100px' }}
      >
        <form
          className='bg-dark d-flex flex-column p-3 gap-3 shadow-sm rounded'
          style={{ width: '100%', maxWidth: '400px', minHeight: '600px' }}
          onSubmit={getRegisterApi}
        >
          <img
            className='w-100 rounded '
            style={{ height: '200px', objectFit: 'cover' }}
            src="images\pexels-shattha-pilabut-38930-135620.jpg"
            alt="RegisterImage"
          />
          <h1 className='text-light text-center fs-5'>Sign Up to view your profile</h1>
          <input className='form-control' onChange={handleChange} type="text" placeholder='Enter name' name='name' value={form.name} />
          <input className='form-control' onChange={handleChange} type="text" placeholder='Enter Email' name='email' value={form.email} />
          <input className='form-control' onChange={handleChange} type="password" placeholder='Create Password' name='password' value={form.password} />
          <button className='btn btn-primary fs-5'>Continue</button>
          <p className='text-light text-center'>already have account <span onClick={()=> navigate('/login')}><a href="#">Login</a></span></p>
          <p className='text-light text-center small'>
            By continuing, you agree to GrabIN’s<br />
            <a href="#" className='text-decoration-underline text-info'>Terms & Conditions</a> and{' '}
            <a href="#" className='text-decoration-underline text-info'>Privacy Policy</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
