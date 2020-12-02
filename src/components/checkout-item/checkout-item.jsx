import React from 'react'
import './checkout-item.scss';
import { discardItem, removeItem, addItem } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux';

const CheckOutItem = ({ cartItem, discardItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity} = cartItem;
    
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>

        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow"
                onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className="arrow"
                 onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className="price">${price}</span>
        <div className="remove-button"
             onClick={() => discardItem(cartItem)}>&#10005;</div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    discardItem: item => dispatch(discardItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckOutItem);