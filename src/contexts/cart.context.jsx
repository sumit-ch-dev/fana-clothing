import { createContext, useState } from "react";

const addCardItems = (cartItems, productToAdd) => {
//find if cartitems contains 
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    }
    return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
    isCartOpen: false,
    setCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => {}
})


export const CartProvider = ({ children }) => {
    const [isCartOpen, setCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCardItems(cartItems, productToAdd))
    }

    return (
        <CartContext.Provider value={{isCartOpen, setCartOpen, addItemToCart, cartItems}}>{children}</CartContext.Provider>
    )
}