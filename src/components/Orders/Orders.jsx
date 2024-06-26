import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart)

    const handelRemoveCart = (id) => {
        const reamaining = cart.filter(product => product.id !== id);
        setCart(reamaining);
        removeFromDb(id);
    }
    const handelClearCart = ()=>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handelRemoveCart = {handelRemoveCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                    handelClearCart = {handelClearCart}                
                >
                    <Link to="/checkout">
                        <button>Procced Checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;