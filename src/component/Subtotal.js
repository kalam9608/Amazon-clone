// import { SportsBasketball } from '@mui/icons-material'
import React from "react";
import { useStateValue } from "../ContextHooks/StateProvider";
import "./subtotal.css";

const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const Subtotal = () => {
  const [{ basket }] = useStateValue();

  const price = basket[0].price;
  console.log("thiis the price", price);
  return (
    <>
      <div className="subtotal">
        <div className="subtotals_info">

        <h4 className="subtotal_heading"> Subtotals </h4>
       <h6> ({basket.length} items)</h6>

       <small><span >₹</span></small> <strong >{getBasketTotal(basket)} /-</strong>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            />
             amazone gift
        </div>
        <button>proceed to payment</button>
            </div>
      </div>
    </>
  );
};

export default Subtotal;
