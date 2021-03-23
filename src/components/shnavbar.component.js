import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
require('../styles/shnavbar.scss');

export default class SHNavbar extends Component {

    render() {
        return (
            <Container>
                <div className="shnavbar-component">
                    <Navbar fluid fixed="top" className="nb-background navbar-expand">
                            <Navbar.Brand className="nb-title" href="/">Second Helpings</Navbar.Brand>
                            <Nav className="mr-auto">
                                <Link to="/" className="nav-link nb-link">Home</Link>
                                <Link to="/board" className="nav-link nb-link">Board</Link>
                            </Nav>
                            <Nav>
                                <Link to="/login" className="nav-link nb-link">Log In</Link>
                            </Nav>
                    </Navbar>
                </div>
            </Container>
        );
    }

}