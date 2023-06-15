import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { CheckoutPageContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles'

const Checkout = () => {
    const { cartItems, totalAmount } = useContext(CartContext)

    return (
        <CheckoutPageContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>remove</span>
                </HeaderBlock>
            </CheckoutHeader>

            {cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )}
            <Total>Total: ${totalAmount}</Total>
        </CheckoutPageContainer>
    )
}

export default Checkout;