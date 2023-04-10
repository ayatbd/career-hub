import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            
            <Link to="/">JobHub</Link>

            <ul>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
                <li></li>
                <li></li>
            </ul>
            <button>Star Applying</button>
        </nav>
    );
};

export default Header;