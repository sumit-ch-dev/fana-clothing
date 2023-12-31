import { createSelector } from "reselect";
import { CartState } from "./cart.reducer";
import { RootState } from "../store";

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.price, 0)
);



export const selectCartItemsCountAndTotal = createSelector(
    [selectCartItemsCount, selectCartTotal],
    (cartItemsCount, cartTotal) => ({
        cartItemsCount,
        cartTotal,
    })
);

