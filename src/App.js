import React, { useState, useEffect } from 'react';
import './style.css';
import ItemCard from './ItemCard'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Home';
import Cart from './Cart'

import { CartProvider } from 'react-use-cart';
export default function App() {
  
  return (
   
    <>
    
    <CartProvider>
      <Home/>
      <Cart/>
    </CartProvider>
    </>
  
  );
}


