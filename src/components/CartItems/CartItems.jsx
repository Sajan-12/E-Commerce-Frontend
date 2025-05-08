import React, { useContext } from 'react'
import "./CartItem.css";
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from "../Assets/Frontend_Assets/cart_cross_icon.png";

const CartItems = () => {
  const {getToatlAmount,all_Product,cartItems,removeFromCart}=useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cartietms-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      {

          all_Product.map((item)=>{
            if(cartItems[item.id]>0){
                 return   <div className="cartitems-format cartietms-format-main">
                 <img src={item.image} alt="" className='carticon-product-icon'/>
                 <p>{item.name}</p>
                 <p>${item.new_price}</p>
                 
                 <button className='cartitems-quantity'>{cartItems[item.id]}</button>
                 <p>${item.new_price*cartItems[item.id]}</p>
                 
                 <img className="cartitems-remove-icon" src={remove_icon} alt=""
                 onClick={()=>{removeFromCart(item.id)}}/>
                
               </div>
            }
           else return null;
          })
    
      }
      <div className="cartitems-down">
            <div className="cartitems-total">
              <h1>Cart Totals</h1>
              <div className='cartitems-total-icon'>
                <p>Subtotal</p>
                <p>${getToatlAmount()}</p>
              </div>
            <hr/>
            <div className='cartitems-total-icon'>
                <p>Shipping Fee</p>
                <p>Free</p>
          </div>
          <hr/>
          <div className='cartitems-total-icon'>
                <p><span>Total</span></p>
                <p><span>${getToatlAmount()}</span></p>
              </div>
              <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promocode'></input>
            <button>Submit</button>
          </div>             
        </div>
        
    </div>
    </div>
  )
}

export default CartItems;
