import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../components/Item/Item";
import dropdown_icon from "../components/Assets/Frontend_Assets/dropdown_icon.png";
import "./CSS/ShopCategory.css";
const ShopCategory=function(props){
   const {all_Product}=useContext(ShopContext);

 return (

    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt=""/>
      <div className="shopcategory-indexSort">
        <p> <span> Showing 1-12</span> out of 36 products</p>
        <div className="shopcategory-sort">
         Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
         {
         all_Product.map((item,i)=>{
            if(props.category===item.category){
             return <Item key={i} item={item} />
            }
            else return null;
         })
      }
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
 )
}
export default ShopCategory;