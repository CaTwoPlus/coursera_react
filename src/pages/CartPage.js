import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, removeFromCart } from '../store/cartSlice';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const items = useSelector(s => s.cart.items);
  const dispatch = useDispatch();
  const totalQty  = items.reduce((a,i)=>a+i.quantity,0);
  const totalCost = items.reduce((a,i)=>a + i.quantity*i.price,0);

  return (
    <>
      <Header />
      <div className="cart-page">
        <h2>Total Plants: {totalQty}</h2>
        <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
        {items.map(i=>(
          <div key={i.id} className="cart-item">
            <img src={i.img} alt={i.name} />
            <div>
              <h4>{i.name}</h4>
              <p>Unit: ${i.price}</p>
              <p>Qty: {i.quantity}</p>
              <button onClick={()=>dispatch(decrement(i.id))}>-</button>
              <button onClick={()=>dispatch(increment(i.id))}>+</button>
              <button onClick={()=>dispatch(removeFromCart(i.id))}>Delete</button>
            </div>
          </div>
        ))}
        <Link to="/products" className="continue">Continue Shopping</Link>
        <button onClick={()=>alert('Coming Soon!')}>Checkout</button>
      </div>
    </>
  );
}