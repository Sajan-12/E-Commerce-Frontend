import React, { useEffect, useState } from 'react'
import "./RelatedProducts.css";
import related_data from '../Assets/Frontend_Assets/data.js' ;
import Item from "../Item/Item"
import { useParams } from 'react-router';
const RelatedProducts = () => {
       const {productId}=useParams();
       const[relatedData,setRelatedData]=useState(related_data);
       
       useEffect(()=>{
        fetch(`https://e-commerce-8waw.onrender.com/relatedproduct/${productId}`).then((response)=>response.json())
        .then((data)=>{
         setRelatedData(data)}
       );
       },[]);
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr/>
     <div className="relatedproducts-items">
        {
         relatedData.map((item,id)=>{
          return <Item key={id} item={item}/>
         })
        }
     </div>
    </div>
  )
}

export default RelatedProducts;
