import React,{useRef} from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import Offers from "../components/Offers/Offers";
import Newcollections from "../components/Newcollections/Newcollections";
import NewsLetter from "../components/NewsLetter/NewsLetter";

const Shop=function(){
   const newCollectionRef = useRef(null); 
  const scrollToNewCollection = () => {
    newCollectionRef.current?.scrollIntoView({ behavior: 'smooth' }); 
  };
 return (
    <div>
    <Hero onNewCollectionClick={scrollToNewCollection}/>
    <Popular/>
    <Offers/>
    <div ref={newCollectionRef}> 
        <Newcollections/>
      </div>
    <NewsLetter/>
    </div>
 )
}
export default Shop;