import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, seller, ratings, price} = props.product
    const handelAddToCart = props.handelAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h6 className='product-name'>{name}</h6>
            <p> Price:${price}</p>
            <p>Manufacturar: {seller}</p>
            <p>Ratings: {ratings}</p>
           </div>
           <button onClick={()=>handelAddToCart(props.product)} className='btn-cart'>Add to Cart
    
           </button>
        </div>
    );
};

export default Product;