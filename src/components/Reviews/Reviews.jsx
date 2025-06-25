import React from 'react'
import crossIcon from "../Assets/Admin_Assets/cross_icon.png";
import "./Reviews.css";

const Reviews = ({header,closeHandler,content}) => {

  return (
    <div className='container'>
       <div className='reviews-modal'>
      <div className='header'>
        <div>{header}</div>
        <div><img onClick={()=>closeHandler()} src={crossIcon} alt="cross"/></div>
      </div>
      <div className='content'>
        {content.map((review,ind)=>{
             return <div key={ind}>
              {review}
             </div>
        })
        }
      </div>
    </div>
    </div>

  )
}

export default Reviews
