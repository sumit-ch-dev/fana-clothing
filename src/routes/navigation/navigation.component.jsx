import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import  CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { signOutStart } from '../../store/user/user.action'
import {NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles'
import {selectCurrentUser} from '../../store/user/user.selector'
import { selectIsCartOpen } from '../../store/cart/cart.selector'

const Navigation = () => {
    const dispatch = useDispatch()
    const isCartOpen = useSelector(selectIsCartOpen)
    const currentUser = useSelector(selectCurrentUser)

    const signOutUser = () => dispatch(signOutStart())

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