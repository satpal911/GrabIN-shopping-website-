import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import Home from './Components/Home'
import Login from './Components/Login'
import ProductDetail from './Components/ProductDetail'
import Products from './Components/Products'
import Profile from './Components/Profile'
import Register from './Components/Register'
import Navbar from './Components/Navbar'
import Admin from './Components/Admin'
import Payment from './Components/Payment'
const App = () => {
  return (
    <div>
    <Router>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Checkout' element={<Checkout/>}/>
        <Route path='/ProductDetail' element={<ProductDetail/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/Payment' element={<Payment/>}/>
       </Routes>
    </Router>      
    </div>
  )
}
export default App
