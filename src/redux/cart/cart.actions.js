import CartActionTypes from './cart.types';


const CartActions = {

    toggleCartHidden: () => ({
        type: CartActionTypes.TOGGLE_CART_HIDDEN
    }),

    addItem: itemToAdd => ({
        type: CartActionTypes.ADD_ITEM,
        payload: itemToAdd
    })
}




export default CartActions;
