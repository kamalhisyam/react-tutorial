import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = itemToAdd => ({
    type: CartActionTypes.ADD_ITEM,
    payload: itemToAdd
});

export const discardItem = itemToDiscard => ({
    type: CartActionTypes.DISCARD_ITEM,
    payload: itemToDiscard
});

export const removeItem = itemToRemove => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: itemToRemove
})

