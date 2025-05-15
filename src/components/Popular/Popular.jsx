import React, { useEffect, useState } from 'react'
import './Popular.css';

import Item from '../Item/Item.jsx';
const Popular = () => {
  const [product_data,setProductData]=useState([]);

  useEffect(()=>{
         fetch('https://e-commerce-8waw.onrender.com/popularinwomen')
        .then((resp)=>resp.json()).then((data)=>{
          setProductData(data)});
     },[]);
 

  return (
   
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
      <hr/>
     
      <div className="popular-items">
        {product_data.map((item,i)=>{
             return <Item key={i} item={item}/>
        })
        }
      
      </div>
    </div>
  )
}

export default Popular;
