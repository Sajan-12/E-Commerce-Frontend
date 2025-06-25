import React, { createContext,useEffect, useState } from "react";

export const ShopContext=createContext(null);
const getDefaultCart=()=>{
      let cart={};
      for(let index=1;index<=300;index++){
            cart[index]=0;
      }
      return cart;
}

const ShopContextProvider=(props)=>{
      const [cartItems,setCartItems]=useState(getDefaultCart());
      const [all_Product,setAllProduct]=useState([]);

      useEffect(()=>{
            fetch('https://e-commerce-8waw.onrender.com/products')
            .then((response)=>response.json())
             .then((data)=>{setAllProduct(data.products)});
             
             if(localStorage.getItem('auth-token')){
                  fetch('https://e-commerce-8waw.onrender.com/getcartitems',{
                        method:'GET',
                        headers:{
                              Accept:'application/json',
                              'auth-token':`${localStorage.getItem('auth-token')}`,
                              'Content-Type':'application/json'
                        },
                  }).then((resp)=>resp.json()).then((data)=>{
                       if (data.cartData)  setCartItems(data.cartData)});
             }
         },[]);

      const getToatlAmount=()=>{
            let totalAmount=0;
            for(let item in cartItems){
                  if(cartItems[item]>0){
                        let itemInfo=all_Product.find((it)=>it.id==Number(item))
                        totalAmount+=itemInfo.new_price*cartItems[item];
                  }
            }
            return totalAmount;
      }
      const getTotalCartItems=()=>{
          let totalItems=0;
          for(let item in cartItems){
            totalItems+=cartItems[item];
          }
          return totalItems;
      }
      const addToCart=(itemId)=>{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
            if(localStorage.getItem('auth-token')){
                  fetch('https://e-commerce-8waw.onrender.com/addtocart',{
                        method:'POST',
                        headers:{
                              Accept:'application/json',
                              'auth-token':`${localStorage.getItem('auth-token')}`,
                              'Content-Type':'application/json'
                        },
                        body:JSON.stringify({'itemId':itemId})
                  }).then((response)=>response.json()).then((data)=>
                  console.log(data.msg));

            }
      }
      const removeFromCart=(itemId)=>{
            setCartItems((prev)=>({...prev,[itemId]:(prev[itemId]===0?0:prev[itemId]-1)}));
            if(localStorage.getItem('auth-token')){
                  fetch('https://e-commerce-8waw.onrender.com/removefromcart',{
                        method:'POST',
                        headers:{
                              Accept:'application/json',
                              'auth-token':`${localStorage.getItem('auth-token')}`,
                              'Content-Type':'application/json'
                        },
                        body:JSON.stringify({'itemId':itemId})
                  }).then((response)=>response.json()).then((data)=>
                  console.log(data.msg));

            }
      }
      console.log(all_Product);
      const contextValue={getTotalCartItems,getToatlAmount,all_Product,cartItems,addToCart,removeFromCart};
      //console.log(cartItems);
   
      return <ShopContext.Provider value={contextValue}>
            {props.children}
      </ShopContext.Provider>
}
export default ShopContextProvider;
