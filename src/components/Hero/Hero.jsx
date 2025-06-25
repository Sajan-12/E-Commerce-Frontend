import React from 'react';
import hand_icon from "../Assets/Frontend_Assets/hand_icon.png";
import arrow_icon from "../Assets/Frontend_Assets/arrow.png";
import hero_image from "../Assets/Frontend_Assets/hero.png";
import "./Hero.css";
const Hero = ({ onNewCollectionClick }) => {
  return (
    <div className='hero'>
      <div className="hero-left">

      <h2>NEW ARRIVALS ONLY</h2>
      
      <div className='hero-left-content'>
            <div className="hero-hand-icon">
               <p>new</p>
                <img src={hand_icon} alt=""></img>
                
                 </div>
                
                 <p>collections</p>
                 <p>for everyone</p>
                
                  
     </div>
      <div className="hero-latest-btn">
        <div onClick={()=>{onNewCollectionClick()}}>Latest Collection</div>
        <img src={arrow_icon} alt=""></img>
      </div>

      </div>
      <div className="hero-right">
           <img src={hero_image} alt=""></img>
      </div>
    </div>
  )
}

export default Hero;
