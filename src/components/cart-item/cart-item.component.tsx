import {
    CartItemContainer,
    CartItemImage,
    ItemDetailsContainer,
    CartItemName,
    CartItemPrice
} from './cart-item.styles'

import { CartItem as CartItemType } from '../../store/cart/cart.types'
import { FC, memo } from 'react'

type CartItemProps = {
    cartItem: CartItemType
}

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem

    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={name} />
            <ItemDetailsContainer>
                <CartItemName>{name}</CartItemName>
                <CartItemPrice className='price'>{quantity} X ${price}</CartItemPrice>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
})

export default CartItem;