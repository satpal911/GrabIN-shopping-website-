import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from 'react-use-cart'

const Cart = () => {
  const navigate = useNavigate()
  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
    totalItems
  } = useCart()

 if (isEmpty) 
  return (
    <h2 style={{ paddingTop: '98px', textAlign: 'center' }}>
      Your cart is empty
    </h2>
  )

                  

  return (
    <div className='container my-4' style={{ paddingTop: '98px'}}>
      <h2>Your Shopping Cart ({totalItems} items)</h2>
      <div className='border border-1 p-3'>
        {items.map(item => (
          <div key={item.id} className='d-flex align-items-center mb-3 border-bottom pb-2'>
            <img src={item.image} alt={item.title} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
            <div className='ms-3 flex-grow-1'>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <h4>₹ {item.price}</h4>
              <p>Quantity: {item.quantity}</p>
              <div>
                <button
                  className='btn btn-sm btn-secondary me-2'
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <button
                  className='btn btn-sm btn-secondary me-2'
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className='btn btn-sm btn-danger'
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4>Total: ₹ {cartTotal.toFixed(2)}</h4>

      <button className='btn btn-outline-danger' onClick={() => emptyCart()}>
        Clear Cart
      </button>
      <button className='btn btn-success ms-4 px-4'
      onClick={()=> navigate('/payment',{state:{cartTotal}})}>CheckOut</button>
    </div>
  )
}

export default Cart
