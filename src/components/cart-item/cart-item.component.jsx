import {
    CartItemContainer,
    CartItemImage,
    ItemDetailsContainer,
    CartItemName,
    CartItemPrice
} from './cart-item.styles.jsx'

const CartItem = ({ cartItem }) => {
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
}

export default CartItem;