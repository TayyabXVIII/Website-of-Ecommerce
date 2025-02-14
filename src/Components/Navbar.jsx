import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import handleCart from '../redux/reducers/handleCart';


const Navbar = ({ loggedInUser, setLoggedInUser }) => {
    const handleLogout = () => {
        setLoggedInUser(null); // Clear the user name
    };

    const state = useSelector((state) => state.handleCart || [])
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-lg">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">
                        Style Hive
                    </NavLink>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/products">Products</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
                        </ul>
                        <div className="buttons">
                            {loggedInUser ? (
                                <>
                                    <span className="me-3 fw-bold">Hi, {loggedInUser} 👋</span>
                                    <button className="btn btn-outline-danger" onClick={handleLogout}>
                                        <i className="fa fa-sign-out me-1"></i> Logout
                                    </button>
                                    <NavLink to='/cart' className='btn btn-outline-dark ms-2'>Cart({state.length})</NavLink>
                                </>
                            ) : (
                                <>
                                    <NavLink to='/login' className='btn btn-outline-dark'>Login</NavLink>
                                    <NavLink to='/register' className='btn btn-outline-dark ms-2'>Register</NavLink>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
