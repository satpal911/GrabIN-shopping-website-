import React, { useEffect } from 'react'
import './Home.css'
import axios from 'axios'
import { useState } from 'react'
import { useCart } from 'react-use-cart'
import { useNavigate } from 'react-router-dom'
const Home = () => {

  const navigate = useNavigate()
  const {addItem} = useCart()
  const [products, setProducts] = useState([])
   const getApi = async () => {
  const res = await axios("http://localhost:4000/api/");
  // Map to add 'id' field if it's missing but you have '_id'
  const productsWithId = res.data.data.map(item => ({
    ...item,
    id: item.id || item._id // prefer 'id', fallback to '_id'
  }));
  setProducts(productsWithId);
}

  useEffect(()=>{
    getApi();
  },[])

  return (

    <div className='carousel-wrapper'>  
      <div id="carouselExampleAutoplaying" className="carousel slide my-2" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className='bgImage1 d-flex align-items-center'>
          <div className='w-100'></div>
          <div className='d-flex flex-column w-100 align-items-center'>
            <h1 className='mx-5 text-center text-light shadow-lg'>Feel free to SHOP</h1>
            <button className='btn btn-light mx-5 w-50'
            onClick={()=> navigate('/products')}>Shop Now</button>
          </div>
        </div>
    </div>
    <div className="carousel-item">
     <div className='bgImage2 d-flex align-items-center'>
          <div className='w-100'></div>
          <div className='d-flex flex-column w-100 align-items-center'>
            <h1 className='mx-5 text-center text-light shadow-lg'>Feel free to SHOP</h1>
            <button className='btn btn-light mx-5 w-50'
            onClick={()=> navigate('/products')}>Shop Now</button>
          </div>
        </div>
    </div>
    <div className="carousel-item">
        <div className='bgImage3 d-flex align-items-center'>
          <div className='w-100'></div>
          <div className='d-flex flex-column w-100 align-items-center'>
            <h1 className='mx-5 text-center text-light shadow-lg'>Feel free to SHOP</h1>
            <button className='btn btn-light mx-5 w-50'
            onClick={()=> navigate('/products')}>Shop Now</button>
          </div>
        </div>
    </div>
     <div className="carousel-item">
        <div className='bgImage4 d-flex align-items-center'>
          <div className='w-100'></div>
          <div className='d-flex flex-column w-100 align-items-center'>
            <h1 className='mx-5 text-center text-light shadow-lg'>Feel free to SHOP</h1>
            <button className='btn btn-light mx-5 w-50'
            onClick={()=> navigate('/products')}>Shop Now</button>
          </div>
        </div>
    </div>
     <div className="carousel-item">
        <div className='bgImage5 d-flex align-items-center'>
          <div className='w-100'></div>
          <div className='d-flex flex-column w-100 align-items-center'>
            <h1 className='mx-5 text-center text-light shadow-lg'>Feel free to SHOP</h1>
            <button className='btn btn-light mx-5 w-50'
            onClick={()=> navigate('/products')}>Shop Now</button>
          </div>
        </div>
    </div>
     <div className="carousel-item">
        <div className='bgImage6 d-flex align-items-center'>
          <div className='w-100'></div>
          <div className='d-flex flex-column w-100 align-items-center'>
            <h1 className='mx-5 text-center text-light shadow-lg'>Feel free to SHOP</h1>
            <button className='btn btn-light mx-5 w-50'
            onClick={()=> navigate('/products')}>Shop Now</button>
          </div>
        </div>
    </div>
     <div className="carousel-item">
        <div className='bgImage7 d-flex align-items-center'>
          <div className='w-100'></div>
          <div className='d-flex flex-column w-100 align-items-center'>
            <h1 className='mx-5 text-center text-light shadow-lg'>Feel free to SHOP</h1>
            <button className='btn btn-light mx-5 w-50'
            onClick={()=> navigate('/products')}>Shop Now</button>
          </div>
        </div>
    </div>
     <div className="carousel-item">
        <div className='bgImage8 d-flex align-items-center'>
          <div className='w-100'></div>
          <div className='d-flex flex-column w-100 align-items-center'>
            <h1 className='mx-5 text-center text-light shadow-lg'>Feel free to SHOP</h1>
            <button className='btn btn-light mx-5 w-50'
            onClick={()=> navigate('/products')}>Shop Now</button>
          </div>
        </div>
    </div>
     <div className="carousel-item">
        <div className='bgImage9 d-flex align-items-center'>
          <div className='w-100'></div>
          <div className='d-flex flex-column w-100 align-items-center'>
            <h1 className='mx-5 text-center text-light shadow-lg'>Feel free to SHOP</h1>
            <button className='btn btn-light mx-5 w-50'
            onClick={()=> navigate('/products')}>Shop Now</button>
          </div>
        </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        <div className='row'> 
     {products.map((item,index)=>(
      <div className='col-md-3 col-12 gap-2 py-2 px-5 ' key={index} onClick={()=> navigate('/productDetail',{state:{product: item }})}>
         <div className='product-card border border-1'>
           <img className='rounded' src={item.image} alt="image" />
          <h3>{item.title}</h3>
          <p className='product-description'>{item.description}</p>
          <h2>₹ {item.price}</h2>
          <div className='d-flex justify-content-around'>
            <button className='btn btn-danger text-light fw-bold border-0 py-1 px-3 rounded'
            onClick={(e)=>{e.stopPropagation(); navigate('/payment',{state:{type: 'buy', item }})}}>Buy</button>
            <button className='btn btn-outline-danger fw-bold py-1 px-3 rounded'
            onClick={(e)=>{ e.stopPropagation();   addItem(item)}}>Add to Cart</button>
          </div>
         </div>
      </div>
     ))}
       </div>
    </div>
  )
}

export default Home
