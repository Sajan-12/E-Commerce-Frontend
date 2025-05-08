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
            fetch('http://localhost:4000/products')
            .then((response)=>response.json())
             .then((data)=>{setAllProduct(data.products)});
             
             if(localStorage.getItem('auth-token')){
                  fetch('http://localhost:4000/getcartitem',{
                        method:'POST',
                        headers:{
                              Accept:'application/json',
                              'auth-token':`${localStorage.getItem('auth-token')}`,
                              'Content-Type':'application/json'
                        },
                        body:""
                  }).then((resp)=>resp.json()).then((data)=>setCartItems(data));
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
                  fetch('http://localhost:4000/addtocart',{
                        method:'POST',
                        headers:{
                              Accept:'application/json',
                              'auth-token':`${localStorage.getItem('auth-token')}`,
                              'Content-Type':'application/json'
                        },
                        body:JSON.stringify({'itemId':itemId})
                  }).then((response)=>response.json()).then((data)=>
                  console.log(data));

            }
      }
      const removeFromCart=(itemId)=>{
            setCartItems((prev)=>({...prev,[itemId]:(prev[itemId]===0?0:prev[itemId]-1)}));
            if(localStorage.getItem('auth-token')){
                  fetch('http://localhost:4000/removefromcart',{
                        method:'POST',
                        headers:{
                              Accept:'application/json',
                              'auth-token':`${localStorage.getItem('auth-token')}`,
                              'Content-Type':'application/json'
                        },
                        body:JSON.stringify({'itemId':itemId})
                  }).then((response)=>response.json()).then((data)=>
                  console.log(data));

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
