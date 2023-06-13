import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import  CartIcon from '../../components/cart-icon/cart-icon.component'
import './navigation.styles.scss'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'


const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    // console.log(currentUser);
    const { isCartOpen } = useContext(CartContext)

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to="/">
                    <Logo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>Shop</Link>
                    <Link className='nav-link' to='/contact'>Contact</Link>
                    {currentUser ? 
                    (<Link className='nav-link' to='/auth' onClick={signOutUser}>
                        Sign Out
                        </Link>) : (<Link className='nav-link' to='/auth'>Sign In</Link>)}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation