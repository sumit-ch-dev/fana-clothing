import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import  CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import {NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles'
import {selectCurrentUser} from '../../store/user/user.selector'
import { selectIsCartOpen } from '../../store/cart/cart.selector'

const Navigation = () => {
    const isCartOpen = useSelector(selectIsCartOpen)
    const currentUser = useSelector(selectCurrentUser)

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <Logo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>Shop</NavLink>
                    {currentUser ? 
                    (<NavLink as='span' to='/auth' onClick={signOutUser}>
                        Sign Out
                        </NavLink>) : (<NavLink to='/auth'>Sign In</NavLink>)}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation