import React from 'react'
import "./Item.css";
import { Link } from 'react-router';
const Item = (props) => {
  let item=props.item;
  return (
    <div className='item'>
       <Link to={`/product/${props.item.id}`}><img src={item.image} alt="" ></img></Link> 
        <p>{item.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${item.new_price}
            </div>
            <div className='item-price-old'>
                ${item.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item;
