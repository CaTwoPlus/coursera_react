import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

export default function Header() {
  const count = useSelector(s => s.cart.items.reduce((a,i)=>a+i.quantity,0));
  const loc = useLocation();
  let title = '';
  if(loc.pathname === '/products') title = 'Plants';
  if(loc.pathname === '/cart') title = 'Shopping Cart';

  return (
    <header className="app-header">
      <div className="header-left">
        <Link to="/" className="logo">🌿 Paradise Nursery</Link>
        <span className="slogan">Where Green Meets Serenity</span>
      </div>
      {title && <div className="header-title">{title}</div>}
      <div className="header-right">
        <Link to="/cart" className="cart-link">
          <img src="/images/cart-icon.svg" alt="Cart" />
          <span className="cart-count">{count}</span>
        </Link>
      </div>
    </header>
  );
}