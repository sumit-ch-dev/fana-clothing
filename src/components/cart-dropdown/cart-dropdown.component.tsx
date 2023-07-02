import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import Button from '../button/button.component'
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'
import { selectCartItems } from '../../store/cart/cart.selector'

    

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate()

    const goToCheckout = useCallback(() => {
        navigate('/checkout')
    },[navigate])

    return (
        <CartDropdownContainer>
            <CartItems>
            {
                cartItems.length === 0 ? <EmptyMessage>Wow, Such Empty</EmptyMessage> : <CartItems>
                    {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
                </CartItems>
            }
            </CartItems>

            <Button onClick={goToCheckout}>Go to checkout</Button>

        </CartDropdownContainer>
    )
}

export default CartDropdown;