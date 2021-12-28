import React from 'react';
import { Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './MenuBar.css';

const Menubar = () => {
    const { user, logOut } = useAuth();

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div>
            <Navbar className='fixed-top' bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className='logo' href="#">TRAVEL<span>PRO</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={NavLink} to="/home" activeStyle={{
                                fontWeight: "bold",
                                color: "#ff4838"
                            }}>Home</Nav.Link>

                            <Nav.Link as={NavLink} to="/aboutus" activeStyle={{
                                fontWeight: "bold",
                                color: "#ff4838"
                            }}>About Us</Nav.Link>

                            <Nav.Link as={NavLink} to="/allpackage" activeStyle={{
                                fontWeight: "bold",
                                color: "#ff4838"
                            }}>All Packages</Nav.Link>




                        </Nav>
                        <Form onSubmit={handleSubmit} className="d-flex nav-button">

                            {
                                user.email ? <NavDropdown title={user.displayName} id="navbarScrollingDropdown">
                                    <NavDropdown.Item as={Link} to='/mybooking'>My Booking</NavDropdown.Item>

                                    <NavDropdown.Item as={Link} to='/managebooking'>Manage Booking</NavDropdown.Item>

                                    <NavDropdown.Item as={Link} to='/addpackage'>Add A Package</NavDropdown.Item>

                                </NavDropdown> : <p></p>
                            }



                            {
                                user.email ? <button className='nav-btn' onClick={logOut}>Sign Out</button> :
                                    <Link className='me-2' to='/login'>
                                        <button className='nav-btn'>Sign In</button>
                                    </Link>
                            }

                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;