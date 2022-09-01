import React from "react";
import "./checkout.css";
import { useStateValue } from "../ContextHooks/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const CheckOut = () => {
  const [{ basket }] = useStateValue();

  return (
    <>
      <div className="checkout">
        <div className="checkout-left">
          <img
            className="checkout_ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/audio/MVRstore/918_AB_B2C-GIF_1500x100_1.gif"
            alt=""
          />
          {basket?.length === 0 ? (
            <div> 
              <h4>your cart is Empty add to cart and shoping now</h4>
            </div>
          ) : (
            <div>
              <h3 className="shopingbasket_heading">
             this is your cart items
              </h3>

              {basket?.map((item) => {
                return (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* { basket.length>0 ? (basket.length=0):basket.length="g"} */}
        {/* { basket.length>0 && (basket.length=0)} */}
        { basket?.length>0 && (<div><Subtotal/></div>)}


        </div>
    </>
  );
};

export default CheckOut;
