import React, { useContext } from "react";
import Breadcrum from "../components/Breadcrum/Breadcrum";
import {ShopContext} from "../Context/ShopContext";
import { useParams } from "react-router";
import ProductDisplay from "../components/Productdisplay/ProductDisplay";
import DescriptionBox from "../components/Description/DescriptionBox";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";

const Product=function(){
   const {all_Product}=useContext(ShopContext);
   
   const {productId}=useParams();
   
   const product=all_Product.find((p)=>p.id===Number(productId));
 return (
    <div>
       <Breadcrum product={product} />
       <ProductDisplay product={product} />
       <DescriptionBox/>
       <RelatedProducts/>
       
    </div>
 )
}
export default Product;