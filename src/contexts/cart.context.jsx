import { createContext, useEffect, useState } from "react";

const addCartItems = (cartItems, productToAdd) => {
    //find if cartitems contains any item with the same id as the product to add
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id)

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
    }
    return cartItems.map(cartItem =>
        cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    )
}

const clearCartItem = (cartItems, productToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== productToClear.id)
}



export const CartContext = createContext({
    isCartOpen: false,
    setCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => { },
    removeCartItem: () => { },
    clearCartItem: () => { },
    itemCount: 0,
    totalAmount: 0
})


export const CartProvider = ({ children }) => {
    const [isCartOpen, setCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [itemCount, setItemCount] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItems(cartItems, productToAdd))
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }
    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems, productToClear))
    }

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setItemCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newTotalAmount = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setTotalAmount(newTotalAmount)
    }, [cartItems])


    const value = {
        isCartOpen,
        setCartOpen,
        addItemToCart,
        removeItemFromCart,
        cartItems,
        itemCount,
        totalAmount,
        clearItemFromCart
    }

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}