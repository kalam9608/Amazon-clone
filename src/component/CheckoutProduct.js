import React from 'react'
import { useStateValue } from '../ContextHooks/StateProvider'
import "./checkoutproduct.css"

const CheckoutProduct = (props) => {
    const {id,price,rating,image,title}=props
    console.log(id,price,title)

    const [state,dispatch]=useStateValue();

    console.log("checkout product state",state)
   

    const removeFromBasket=()=>{

        dispatch({
            type:"REMOVE_BASKET",
            id:id,
        })
        console.log(" i am clicked")
        
    }

  return (
    <>
    <div className="checkout_item">
        <img src={image} alt="" className="checkoutproduct_img" />

        <div className="checkoutproduct_info">
            <p> <h3>{title}</h3> </p>
            <p className='price'>
            <span >₹</span> <small>{price}</small>
            </p>
            <div className="checkoutproduct_rating">
                {Array(rating).fill().map(()=> <p>⭐</p>)}
            </div>

        <button onClick={removeFromBasket}>remove item</button>
        </div>
    </div>
    <hr></hr>
    </>
  )
}

export default CheckoutProduct