import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import Header from '../components/Header';

const plants = [
  { id:1, name:'Fiddle Leaf Fig', price:25, img:'/images/fiddle.jpg' },
  { id:2, name:'Snake Plant',     price:15, img:'/images/snake.jpg' },
  { id:3, name:'Aloe Vera',       price:10, img:'/images/aloe.jpg' },
  { id:4, name:'Spider Plant',    price:12, img:'/images/spider.jpg' },
  { id:5, name:'Peace Lily',      price:20, img:'/images/peace.jpg' },
  { id:6, name:'Pothos',          price:14, img:'/images/pothos.jpg' }
];

export default function ProductPage() {
  const cart = useSelector(s => s.cart.items);
  const dispatch = useDispatch();
  const isInCart = id => cart.some(i=>i.id===id);

  return (
    <>
      <Header />
      <div className="products">
        {plants.map(p => (
          <div className="product" key={p.id}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button onClick={()=>dispatch(addToCart(p))} disabled={isInCart(p.id)}>
              {isInCart(p.id)?'In Cart':'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}