import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import './Products.css'
import {useCart} from 'react-use-cart'
import { useNavigate } from 'react-router-dom'
axios.defaults.withCredentials=true
 const categoryMap = {
  Men: ['men','top'],
  Women: ['women'],
  Shoes: ['shoes'],
  Top: ['tops','top'],
  Bottom: ['bottom'],
  'Home Decor': ['furniture','home decor'],
  Electronics: ["smartphones", 'laptops','electronics'],
  Trending: ['trending'],
  Kids: ['kids'],
  Bags: ['womens-bags','bag', "bags"],
  Sports: ['sports']
};

const Products = () => {

  const navigate = useNavigate()

  const {addItem} = useCart()

  const [products, setProducts] = useState([])
  // console.log(products)
  const [search, setSearch] = useState('')
  const [filtered, setFiltered] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const getApi = async () => {
  const res = await axios.get("http://localhost:4000/api/blog/");
  console.log(res)
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

  useEffect(()=>{
    let result = products

    if (selectedCategory !== 'All') {
  const allowedCategories = (categoryMap[selectedCategory] || []).map(cat => cat.toLowerCase());
 result = result.filter(item =>
  Array.isArray(item.category) &&
  item.category.some(cat => allowedCategories.includes(cat.toLowerCase()))
)

}


    if(search.trim() !==''){
      result = result.filter((item)=>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    }
    setFiltered(result)
  },[search,products,selectedCategory])

 const handleCategory = (category) => {
    setSelectedCategory(category)
  }

  return (
    <div>
      <div id="carouselExampleAutoplaying" className="carousel slide my-2z" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg" className="d-block w-100" alt="corousel Image"/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg" className="d-block w-100" alt="corousel Image"/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg" className="d-block w-100" alt="corousel Image"/>
    </div>
     <div className="carousel-item">
      <img src="https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg" className="d-block w-100" alt="corousel Image"/>
    </div>
     <div className="carousel-item">
      <img src="https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg" className="d-block w-100" alt="corousel Image"/>
    </div>
     <div className="carousel-item">
      <img src="https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg" className="d-block w-100" alt="corousel Image"/>
    </div>
     <div className="carousel-item">
      <img src="https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg" className="d-block w-100" alt="corousel Image"/>
    </div>
     <div className="carousel-item">
      <img src="https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg" className="d-block w-100" alt="corousel Image"/>
    </div>
     <div className="carousel-item">
      <img src="https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg" className="d-block w-100" alt="corousel Image"/>
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
     <div className="search-bar-container bg-white px-3 py-2 shadow-sm">
  <input
    type="text"
    placeholder="Search here..."
    className="form-control"
    onChange={(e) => setSearch(e.target.value)}
  />
</div>

      <div className='row'>
              {['All','Men', 'Women', 'Shoes', 'Top', 'Bottom', 'Home Decor',
              'Electronics', 'Trending', 'Kids', 'Bags', 'Sports'].map((cat, index) => (
       <div
                key={index}
                className='category col-md-1 col-3 text-center border-2 shadow-sm py-2 my-1'
                style={{ cursor: 'pointer' }}
                onClick={() => handleCategory(cat)}
       >
              {cat}
            </div>
          ))}
        </div>

       <div className='row'> 
     {filtered.length > 0 ? (  
     filtered.map((item,index)=>(
      <div className='col-md-3 col-12 px-5 py-2' key={index}>
         <div className='product-card border border-1'
         onClick={()=> navigate('/productDetail',{state:{product: item }})}>
           <img className='rounded' src={item.image} alt="image" />
          <h3>{item.title}</h3>
          <p className='product-description'>{item.description}</p>
          <h2>₹ {item.price}</h2>
          <div className='d-flex justify-content-around'>
            <button className='btn btn-danger text-light fw-bold border-0 py-1 px-3 rounded'
            onClick={(e)=>{e.stopPropagation(); navigate('/payment',{state:{type: 'buy', item }})}}>Buy</button>
            <button className='btn btn-outline-danger fw-bold py-1 px-3 rounded'
            onClick={(e)=>{e.stopPropagation(); addItem(item)}}>Add to Cart</button>
          </div>
         </div>
      </div>
     ))) : ( <p>No product found</p>)
     }
       </div>
    </div>
  )
}

export default Products
