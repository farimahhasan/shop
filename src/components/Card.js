import React ,{useContext}  from 'react';
import { isInCart } from '../helper/function';

// Context
import { CartContext } from '../context/CartContextProvider';



const Card = ({p}) => {

    const {state, dispatch} = useContext(CartContext);



    return (
            <div>

                    {
                        isInCart(state,p.id) ?
                        <button  onClick={() => dispatch({type: "INCREASE", payload: p})}>+</button> :
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: p})}>Add to Cart</button>
                    }
                 {/* <button>اضافه کردن به سبد خرید</button> */}
                <img src={p.image2} alt={p.name} id="back-img"/>
                <img src={p.image1} alt={p.name} id="front-img"/>

                <h4>{p.name}</h4>
                <h5> {p.price} تومان</h5>

       

            </div>
    );
};

export default Card;