import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap' //導入需要的component
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to="/home">首頁</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>登出</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
