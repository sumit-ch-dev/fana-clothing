import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles.scss';


const CartIcon = () => {
    
    const { isCartOpen, setCartOpen } = useContext(CartContext)

    const toggleCart = () => {
        setCartOpen(!isCartOpen)
    }


    return (
        <div className='cart-icon' onClick={toggleCart}>
            <ShoppingIcon className='shopping-icon'  />
            <span className='item-count'>123</span>
            
        </div>
    )
}

export default CartIcon;