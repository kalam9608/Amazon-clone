import React from 'react'
import "./header.css"
import { Outlet, Link } from "react-router-dom";
// import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasketIcon';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../ContextHooks/StateProvider';




const Header = () => {

  const [state]=useStateValue();

  const {basket}=state;
  

  return (
    <>

    <nav className="header">

        {/* amazone logo on the left side */}
        <Link to="/">
        <img className='header_logo' src="images/amazone-logo.png" alt="amazone logo" />
        </Link>
   
        <div className="header_search">

       <input type="text" className="header_serchInput" />
       <SearchIcon className="header_serachIcon"/>
        </div>


        
        {/* 3 Link in the nav bar */}
        <div className="header_nav">
        {/* first link */}
        <Link className='header_link' to="/login">
          <div className="header_option">

          <span className='header_headingOne'>hello</span>
          <span className='header_headingTwo'>Sign in</span>
          </div>
        </Link>
        {/* second link */}
        <Link className='header_link' to="/">
          <div className="header_option">

          <span className='header_headingOne'>Return</span>
          <span className='header_headingTwo'>& order</span>
          </div>
        </Link>

        {/* third link */}
        <Link className='header_link' to="/">
          <div className="header_option">

          <span className='header_headingOne'>Your</span>
          <span className='header_headingTwo'>Prime</span>
          </div>
        </Link>

        {/* fourth link */}
        <Link className='header_link' to="/checkout">
        <div className="header_basket">
          {/* shoping basket icon */}
          <ShoppingBasketIcon className='header_basketIcon'/>

          {/* no of items in basket */}
          <span className='header_headingOne'>{basket?.length}</span>

        </div>
        </Link>
      
        </div>
       
    </nav>
    <Outlet />
    </>
  )
}

export default Header