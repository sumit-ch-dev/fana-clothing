import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useSelector, useDispatch } from 'react-redux';
import { CartIconContainer, ShoppingIconSVG, ItemCount } from './cart-icon.styles.jsx';
import { selectIsCartOpen, selectCartItemsCount } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';


const CartIcon = () => {
    const dispatch = useDispatch()
    const itemCount = useSelector(selectCartItemsCount)
    const isCartOpen = useSelector(selectIsCartOpen)
    
    const toggleCart = () => 
        dispatch(setIsCartOpen(!isCartOpen))

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