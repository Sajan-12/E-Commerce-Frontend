import React, { useContext, useEffect, useState } from 'react'
import "./ProductDisplay.css";
import star_icon from "../Assets/Frontend_Assets/star_icon.png";
import heart from "../Assets/Frontend_Assets/image.png";
import likeThumb from "../Assets/Frontend_Assets/like.png"

import { ShopContext } from '../../Context/ShopContext';
import Reviews from '../Reviews/Reviews';
import RatingReview from '../RatingReview/RatingReview';
const ProductDisplay = (props) => {
    const {product}=props;
    let productId=product._id;
    const [reviewsStatus,setReviewsStatus]=useState(false);
    const [addRate,setAddRate]=useState(false);
    const {addToCart}=useContext(ShopContext);
    const [likeStatus,setLikeStatus]=useState("");
    const [avgRating,setAvgRating]=useState(0);
    const [noOfRating,setNoOfRating]=useState(0);
    const [noOfReview,setNoOfReview]=useState(0);
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
         if(localStorage.getItem('auth-token')){
                   fetch(`https://e-commerce-8waw.onrender.com/liked/${productId}`,{
                        method:'GET',
                        headers:{
                              Accept:'application/json',
                              'auth-token':`${localStorage.getItem('auth-token')}`,
                              'Content-Type':'application/json'
                        },
                  }).then((response)=>response.json()).then((data)=>{
                  console.log(data.msg);
                  setLikeStatus((prev)=>prev=data.msg);
            })
            .catch(err=>{
              console.log(err);
              alert("server error");
            })
            } 

            fetch(`https://e-commerce-8waw.onrender.com/avg-rating/${productId}`).then((response)=>response.json())
            .then((data)=>{
                  setAvgRating((prev)=>data.avgRating);
                  setNoOfRating((prev)=>data.noOfRating);
            })
            .catch(err=>{
              console.log(err);
              alert("server error");
            })

            fetch(`https://e-commerce-8waw.onrender.com/all-reviews/${productId}`).then((response)=>response.json())
            .then((data)=>{
                  setReviews((prev)=>data.reviews);
                  setNoOfReview((prev)=>data.noOfReview);
            })
            .catch(err=>{
              console.log(err);
              alert("server error");
            })
    },[]);
   
    function likeHandler(){
           if(localStorage.getItem('auth-token')){
                   fetch(`https://e-commerce-8waw.onrender.com/like/${productId}`,{
                        method:'POST',
                        headers:{
                              Accept:'application/json',
                              'auth-token':`${localStorage.getItem('auth-token')}`,
                              'Content-Type':'application/json'
                        },
                        body:""
                  }).then((response)=>response.json()).then((data)=>{
                  setLikeStatus((prev)=>prev=data.msg);
            })
            .catch(err=>{
              console.log(err);
              alert("server error");
            })
            } 
        }

        const closeHandler=()=>{
          setAddRate(prev=>prev=false);
        }
        const closeReview=()=>{
          setReviewsStatus(prev=>prev=false);
        }
        const toggleRating=()=>{
            setAddRate(prev=>!prev);
          }
        const toggleReview=()=>{
            setReviewsStatus(prev=>!prev);
        }

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
           <div className="productdisplay-img-list">
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
           </div>
           <div className="productdisplay-img">
            <img className="productdisplay-main-img" src={product.image} alt=""/>
           </div>
        </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <span id="rating">{avgRating}</span>
          <img id='star' onClick={()=>toggleRating()} src={star_icon} alt="" />
           <span>({noOfRating} ratings)</span>
           <span id='reviews' onClick={()=>toggleReview()}>({noOfReview} reviews)</span>
           {
            (likeStatus==="unLiked"||likeStatus==="")?<div className='like' onClick={()=>likeHandler()}><img style={{height:"30px", width:"30px"}} src={likeThumb} alt="like"/></div>:
            <div className='like' onClick={()=>likeHandler()}>
              <img src={heart} style={{height:"30px", width:"30px"}} alt="like"/>
            </div>
           }
        </div>
        
         <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}</div>

            </div>

          <div className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves,
           worn as an undershirt or outer garment.
          </div>
          <div className='productdisplay-right-size'>
            <h1>Select Size</h1>
            <div className='productdisplay-right-sizes'>
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
              </div>
          </div>
             <button className='productdisplay-right-size-btn' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
             <p className="displayproduct-right-category"><span>Category </span> Women, T-Shirt, Crop Top</p>
             <p className="displayproduct-right-category"><span>Tags </span> Modern, Latest</p>
         </div>
         {
          addRate&&<RatingReview  header={"Rating and Review"} productId={productId} closeHandler={closeHandler}/>
         }
         {
           reviewsStatus&&<Reviews header={"Reviews"} closeHandler={closeReview} content={reviews}/>
         }
    </div>
  )
}

export default ProductDisplay;
