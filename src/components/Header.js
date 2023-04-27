import React , { useState, useEffect, useContext }  from 'react';
import { Link} from "react-router-dom";
import openicon from "../media/openicon.svg";
import  closeicon from "../media/closeicon.svg";
import shop from "../media/shop.svg";

import { CartContext } from '../context/CartContextProvider';


const Header = () => {

  const {state} = useContext(CartContext);

    
  const [open,setOpen]=useState("false")

  useEffect(()=>{
    setOpen(!open)
  },[])
  
  const clickHandler=()=>{
    setOpen(!open)
  }
    return (
            
      <header>
        <nav className={open? 'navOpen' : 'navClose'}>
          <ul>
            <li><Link to="/" onClick={clickHandler}>صفحه اصلی</Link></li>
            <li><Link to="/products"onClick={clickHandler} >محصولات</Link></li>
          </ul>
          </nav>
          <div id="menu-icon" onClick={clickHandler}>
             <img  className={open? 'd-none' : 'd-block'} src={openicon} alt="icon"/>
             <img className={open? 'd-block' : 'd-none'} src={closeicon} alt="icon"/>
          </div>
          <h1>MAH</h1>

          <div id="icon">
             <Link to='/checkouts'>
             <span id="count">{state.itemsCounter}</span>
              <img src={shop} alt="icon"/>
             </Link>
          </div>
      

      </header>
      
    );
};

export default Header;