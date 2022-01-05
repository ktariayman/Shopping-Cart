import {useCart} from 'react-use-cart';
import React, { useState, useEffect } from 'react';

function ItemCard(props) {
    const {addItem} = useCart();
    // const getTheme = () => {
    //     return JSON.stringify(localStorage.getItem('theme')) || false;
    //   };
    //   const [theme, setTheme] = useState(getTheme());
    
    //   useEffect(() => {
    //     localStorage.setItem('theme', JSON.stringify(theme));
    //   }, [theme]);
    return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 ">

        <div className="card card-body flex-fill"  >
          <img 
          src={props.img} 
          className="card-img-top img-fluid" 
          alt="..." 
          style={{width: '500px'}}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
            <button 
            className="btn btn-primary  "
            onClick={() => addItem(props.item)}
            >
                Add to Cart
            </button>
          </div>
        </div>
    </div>
    )
}

export default ItemCard
