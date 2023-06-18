import { useSelector } from 'react-redux'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { CheckoutPageContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'

const Checkout = () => {
    const cartItems = useSelector(selectCartItems)
    const totalAmount = useSelector(selectCartTotal)
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