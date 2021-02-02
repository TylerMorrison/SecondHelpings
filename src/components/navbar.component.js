import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Links</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/board" className="nav-link">Board</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/facts" className="nav-link">Facts</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/login" className="nav-link">Log In</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/add" className="nav-link">Add Event</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

}