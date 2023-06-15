import { Fragment, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import  CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import {NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles'


const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    // console.log(currentUser);
    const { isCartOpen } = useContext(CartContext)

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