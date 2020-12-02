import React from 'react';
import './cart-icon.scss';



import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from 'react-redux';
import CartActions from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden}></ShoppingIcon>
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(CartActions.toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({itemCount: selectCartItemsCount});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon) ;