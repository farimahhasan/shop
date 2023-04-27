import React, { useContext } from 'react';

// Context
import { CartContext } from '../context/CartContextProvider';

import close from '../media/close.svg';
import min from '../media/min.svg';
import plus from '../media/plus.svg'



const Cart = (props) => {

    const {dispatch} = useContext(CartContext);
    const {image1, name, price, quantity} = props.data;

    return (
        <div className='cartContainer'>
            <img  src={image1} />
            <div>
                <h5>{name}</h5>
                <p>{price} تومان</p>
            </div>
            <div>
                <span >{quantity}</span>
            </div>
            <div id='cart-icon'>
                {
                    quantity > 1 ? 
                    <span onClick={() => dispatch({type: "DECREASE", payload: props.data})} ><img src={min} alt="icon" /></span> :
                    <span onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data})} ><img src={close} alt="icon" /></span>
                }
                <span onClick={() => dispatch({type: "INCREASE", payload: props.data})} ><img src={plus} alt="icon" /></span>
            </div>
        </div>
    );
};

export default Cart;