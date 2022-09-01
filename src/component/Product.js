import React from "react";
import { useStateValue } from "../ContextHooks/StateProvider";
import "./Product.css"

const Product = (props) => {

  const { id, title, price, rating, image } = props.obj;

  const [state,dispatch]=useStateValue();
    

  const addToBasket=()=>{
     dispatch({
      type:"ADD_TO_BASKET",
      item:{id,title,price,rating,image}
     })
  }

  return (
    <div className="product" >

      <div className="product_info">

      <p className="product_title">{title}</p>
      <p className="product_price">
        <small><span >₹</span>   </small>
        <strong>{price}</strong>
      </p>
      <div className="product_rating">
        {Array(rating)
          .fill()
          .map(() => {
            return <span>⭐</span>;
          })}
      </div>
          </div>

      <img src={image} alt="" key={id}/>

      <button onClick={addToBasket}>add to the cart</button>
    </div>
  );
};

export default Product;
