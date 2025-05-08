import React from 'react'
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an on line plateform that focilitates 
          the buying and selling of products or services over the viternet. 
          It serves as a virtual marketplace where businesses and individuals 
          con showcase their products, vteract with on and conduct transactions
           without the need for a physical presence E-commerce websites have goned
            immense populority due to their convenience,
           accessibility, and the globol reach they offer.</p>
           <p>E-commerce websites typically deeply products or services along with detailed descriptions, 
            moges, prices and any available variations (eg. ses colors). 
            Each product usually has its own dedicated page with relevant information.</p>
      </div>
    </div>
  )
}

export default DescriptionBox;
