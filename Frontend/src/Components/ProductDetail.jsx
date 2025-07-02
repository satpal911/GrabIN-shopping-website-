import React from 'react';
import './ProductDetail.css';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract the product from state safely
  const product = location.state?.product;

  if (!product) {
    // If no product found in state, show a message and a back button
    return (
      <div className="mainDiv">
        <p>Product not found. Please go back and select a product.</p>
        <button className="btn btn-primary" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="mainDiv">
      <div className="productDetail">
        <img src={product.image} alt={product.title} className="productImage" />
        <h2>{product.title}</h2>
        <p className="productDescription">{product.description}</p>
        <h3>Price: ₹ {product.price}</h3>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Back to Products
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
