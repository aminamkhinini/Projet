import React from 'react'
// Bootstrap UI Components
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
// React Redux
import { useDispatch, useSelector } from 'react-redux'
// Redux User Actions
import { logout } from '../actions/authAction'

const Header = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state) => state.auth.userInfo.isAuth);
    const user = useSelector(state => state.auth.userInfo.user);
    const role = useSelector(state=> state.auth.userInfo.user?.role)
    const userLogin = useSelector((state) => state.auth.userInfo)
    const {useInfo} = userLogin
   // const role = useSelector((state) => state.auth.userInfo.user?.role);
    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <div>
            <header>
                <Navbar
                   
                    variant='light'
                    expand='lg'
                    collapseOnSelect
                    sticky="top" 
                    style={{backgroundColor:"pink",color:"black", height:60}}
                    className="nav"
                >
                    <Container>
                        <LinkContainer to='/'>
                            <Navbar.Brand>babylando</Navbar.Brand>
                        </LinkContainer>
                        <LinkContainer to='/Conseils'>
                            <Navbar.Brand>Nos Conseils</Navbar.Brand>
                        </LinkContainer>
                        <LinkContainer to='/Products'>
                            <Navbar.Brand>Produits</Navbar.Brand>
                        </LinkContainer>
                        <LinkContainer to='/contact'>
                            <Navbar.Brand>Contact</Navbar.Brand>
                        </LinkContainer>
                        
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className='ml-auto'>
                                <LinkContainer to='/cart'>
                                    <Nav.Link>
                                        <i className='fa fa-shopping-cart mr-2'></i>
                                        Cart
                                    </Nav.Link>
                                </LinkContainer>
                                {isAuth ? (
                                    <NavDropdown
                                        title={user.name}
                                        id='username'
                                    >
                                         {(user.role===user)? (
                                        <LinkContainer to='/profile'>
                                            <NavDropdown.Item>
                                                Profile
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                         ):(
                                            <LinkContainer to='/Admin'>
                                            <NavDropdown.Item>
                                             Profile
                                            </NavDropdown.Item>
                                        </LinkContainer> 
                                         )}
                                        <NavDropdown.Item
                                            onClick={logoutHandler}
                                        >
                                            Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                ) : (
                                    <>
                                    <LinkContainer to='/login'>
                                        <Nav.Link>
                                            <i className='fa fa-user mr-2'></i>
                                            Sign In
                                        </Nav.Link>
                                        
                                    </LinkContainer>
                                     <LinkContainer to='/Register'>
                                     <Nav.Link>
                                         <i className='fa fa-user mr-2'></i>
                                        Register
                                     </Nav.Link>
                                     
                                 </LinkContainer>
                                 </>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    )
}
export default Header