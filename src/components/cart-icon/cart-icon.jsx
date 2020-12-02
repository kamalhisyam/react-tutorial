import React from 'react';
import './cart-icon.scss';



import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from "reselect";

const CartIcon = ({ itemCount, dispatch }) => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={() => {dispatch(toggleCartHidden())}}></ShoppingIcon>
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapStateToProps = createStructuredSelector({itemCount: selectCartItemsCount});

export default connect(mapStateToProps)(CartIcon) ;