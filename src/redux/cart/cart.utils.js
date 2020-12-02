export const addItem = (cartItems, itemToAdd) => {

    const itemExists = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

    if (itemExists) {
        return cartItems.map(cartItem =>
            (cartItem.id === itemToAdd.id) ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem);
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }];
}

export const removeItem = (cartItems, itemToRemove) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToRemove.id);

    if (existingCartItem.quantity === 1)
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);



    return cartItems.map(cartItem =>
        (cartItem.id === itemToRemove.id) ?
            { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem);
}