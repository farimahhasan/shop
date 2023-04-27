

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Components
import Cart from '../components/Cart';

// Context
import { CartContext } from '../context/CartContextProvider';
import checkout from '../media/checkout.svg';
import trash from '../media/trash.svg'



const Checkouts = () => {

    const { state, dispatch } = useContext(CartContext);

    return (
        <div className='checkoutsContainer'>
                <div>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
                </div>
            {
                state.itemsCounter > 0 && <div id="check">
                        <p><span>تعداد محصولات :</span> {state.itemsCounter}</p>
                        <p><span>قیمت نهایی :</span>  {state.total}  تومان  </p>
                        <div >
                            <span  onClick={() => dispatch({type: "CLEAR"})}> <img src={trash} alt="icon" /> </span>
                            <span onClick={() => dispatch({type: "CHECKOUT"})}><img src={checkout} alt="icon" /></span>
                        </div>
                    </div>
            }

            {
                state.itemsCounter === 0 && !state.checkout && <div>
                        <h3>می خواهید خرید کنید ؟</h3>
                        <Link to="/products">برو سراغ محصولات</Link>
                    </div>
            }

            {
                state.checkout && <div >
                        <h3>با موفقیت بررسی شد</h3>
                        <Link to="/products">خرید بیشتر</Link>
                    </div>
            }
            
        </div>
    );
};

export default Checkouts;