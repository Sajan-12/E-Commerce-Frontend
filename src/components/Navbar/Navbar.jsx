
import React, { useContext, useRef, useState } from 'react';

import "./Navbar.css";
import logo from "../Assets/Frontend_Assets/logo.png"
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png";
import { Link } from 'react-router';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from "../Assets/Frontend_Assets/nav_dropdown.png";
function Navbar(){
    const[menu,setMenu]=useState("Shop");
    const {getTotalCartItems}=useContext(ShopContext);
    const menuRef=useRef();

    const dropdown_toggle=(e)=>{
         menuRef.current.classList.toggle('nav-menu-visible');
         e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="">
                </img>
               <h>SHOPPER</h>
            </div>
              <img onClick={dropdown_toggle} src={nav_dropdown} className="nav-dropdown" alt=""/>
                <ul ref={menuRef} className='nav-menu'>
                    <li onClick={()=>setMenu("Shop")}> <Link to="/" style={{textDecoration:"none"}}>Shop</Link> {(menu==='Shop')?<hr/>:<></>}</li>
                    <li onClick={()=>setMenu('Men')}><Link to="/men" style={{textDecoration:"none"}}>Men</Link>  {(menu==='Men')?<hr/>:<></>}</li>
                    <li  onClick={()=>setMenu('Women')}><Link to="/women" style={{textDecoration:"none"}}>Women</Link> {(menu==='Women')?<hr/>:<></>}</li>
                    <li  onClick={()=>setMenu('Kids')}><Link to="/kids" style={{textDecoration:"none"}}>Kids</Link> {(menu==='Kids')?<hr/>:<></>}</li>
                </ul>
          
            <div className="nav-login-cart">
               { localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/');}}>Logout</button>:
            <button><Link to="/login" style={{textDecoration:"none"}}>Login</Link></button>
               }
            <Link to="/cart" style={{textDecoration:"none"}}><img src={cart_icon} alt=""></img></Link>
            <div className="nav-cart-count">{getTotalCartItems()>0?getTotalCartItems():0}</div>
            </div>
        </div>
    )
}
export default Navbar;