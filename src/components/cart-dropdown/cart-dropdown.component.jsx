import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import Button from '../button/button.component'
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'



const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckout = () => {
        navigate('/checkout')
    }

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