import React from 'react';
import './cart-icon.scss';



import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from 'react-redux';
import CartActions from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden }) => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden}></ShoppingIcon>
        <span className="item-count">0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(CartActions.toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon) ;