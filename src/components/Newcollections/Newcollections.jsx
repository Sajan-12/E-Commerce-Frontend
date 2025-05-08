import React, { useEffect, useState } from 'react'
import Item from "../Item/Item";
import "./Newcollections.css";

const Newcollections = () => {
  const [newcollections,setNewCollection]=useState([]);
   useEffect(()=>{
       fetch('http://localhost:4000/newcollection')
      .then((resp)=>resp.json()).then((data)=>{
        setNewCollection(data)});
   },[]);
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr></hr>
        <div className='collections'>
        {
           newcollections.map((item,i)=>{
              return <Item key={i} item={item}/>
           })
        }
      </div>
    </div>
  )
}

export default Newcollections;
