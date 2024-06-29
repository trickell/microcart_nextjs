import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {

    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li>
                    <Link to="/">MICROFIY</Link>
                </li>
                    
                <li>
                <Link to="profile">Profile</Link>
                </li>
                    
                <li>
                <Link to="shopping">Shopping</Link>
                </li>
                    
                <li>
                <Link to="cart">Cart</Link>
                </li>
                
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <div className="searchbar">
                        <input
                            type="text"
                            name="search"
                            id="search" />
                        <button className="search-btn">
                            Search
                        </button>
                    </div>
                </li>
            </ul>
        </nav>
    )
};