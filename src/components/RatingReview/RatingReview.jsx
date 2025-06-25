import React, { useEffect, useState } from 'react'
import "./RatingReview.css";
import crossIcon from "../Assets/Admin_Assets/cross_icon.png";
const RatingReview = ({header,productId,closeHandler}) => {
    const [formData,setFormData]=useState({
        "rating":"","review":""
    })
 
    function onCahangeHandler(e,name){
        setFormData((prev)=>({...prev,[name]:e.target.value}));
    }
    
    function submitHandler(){
         if(formData.rating===""||parseFloat(formData.rating)>5||parseFloat(formData.rating)<1){
          
          closeHandler();
          alert("Enter valid rating");
          return;
         }
         if(localStorage.getItem('auth-token')){
                   fetch(`https://e-commerce-8waw.onrender.com/rating-review/${productId}`,{
                        method:'POST',
                        headers:{
                              Accept:'application/json',
                              'auth-token':`${localStorage.getItem('auth-token')}`,
                              'Content-Type':'application/json'
                        },
                        body:JSON.stringify(formData)
                  }).then((response)=>response.json()).then((data)=>{
                    
                    closeHandler();
                    alert(data.msg);
            })
            .catch(err=>{
              console.log(err);
              alert("server error");
            })
            } 
  
    }
  return (
    <div className='container'>
      <div className='modal'>
         <div className='header'>
              <div>{header}</div>
              <div><img onClick={()=>closeHandler()} src={crossIcon} alt="cross"/></div>
            </div>
     <div><input value={formData.rating} onChange={(e)=>onCahangeHandler(e,"rating")} type='number' name='rating' placeholder='Enter Rating'/></div> 
      <div><textarea value={formData.review}  onChange={(e)=>onCahangeHandler(e,"review")} name='review' placeholder='Review the product' /></div>
      <button className="btn" onClick={()=>submitHandler()} type='submit'>Submit</button>
      </div>
      

    </div>
  )
}

export default RatingReview
