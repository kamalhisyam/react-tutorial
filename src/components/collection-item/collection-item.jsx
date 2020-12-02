import React from 'react';
import { connect } from 'react-redux';
import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from '../custom-button/custom-button';
import './collection-item.scss';

const CollectionItem = ({ item, dispatch }) => {
    const { name, imageUrl, price } = item;
    return (
    <div className='collection-item'>
        <div className='image'
             style={{backgroundImage: `url(${imageUrl})`}}>
        </div>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton inverted onClick={() => {dispatch(addItem(item))}}>ADD TO CART</CustomButton>
    </div>
);}

export default connect()(CollectionItem);