import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer, ShoppingIconSVG, ItemCount } from './cart-icon.styles.jsx';


const CartIcon = () => {
    const { isCartOpen, setCartOpen, itemCount } = useContext(CartContext)

    const toggleCart = () => {
        setCartOpen(!isCartOpen)
    }

    return (
        <CartIconContainer onClick={toggleCart}>
            <ShoppingIconSVG>
                <ShoppingIcon />
            </ShoppingIconSVG>
            <ItemCount>{itemCount}</ItemCount>

        </CartIconContainer>
    )
}

export default CartIcon;