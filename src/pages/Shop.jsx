import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import Offers from "../components/Offers/Offers";
import Newcollections from "../components/Newcollections/Newcollections";
import NewsLetter from "../components/NewsLetter/NewsLetter";

const Shop=function(){
 return (
    <div>
    <Hero/>
    <Popular/>
    <Offers/>
    <Newcollections/>
    <NewsLetter/>
    </div>
 )
}
export default Shop;