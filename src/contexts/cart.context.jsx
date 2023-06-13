import { createContext, useEffect, useState } from "react";

const addCartItems = (cartItems, productToAdd) => {
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
    addItemToCart: () => {},
    itemCount: 0
})


export const CartProvider = ({ children }) => {
    const [isCartOpen, setCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [itemCount, setItemCount] = useState(0)

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItems(cartItems, productToAdd))
    }
    
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setItemCount(newCartCount)
    }, [cartItems])

    return (
        <CartContext.Provider value={{isCartOpen, setCartOpen, addItemToCart, cartItems, itemCount}}>{children}</CartContext.Provider>
    )
}