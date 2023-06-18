import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'
import { ProductCardContainer, Footer, Name, Price } from './product-card.styles'
import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'
import { addItemToCart } from '../../store/cart/cart.action'

const ProductCard = ({ product }) => {

    const { name, price, imageUrl } = product
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const handleAddToCart = () => {
        dispatch(addItemToCart(cartItems, product))
    }

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name className='name'>{name}</Name>
                <Price className='price'>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleAddToCart}>Add to cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard