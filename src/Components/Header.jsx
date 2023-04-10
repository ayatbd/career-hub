import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Custom.css"

const Header = () => {
    return (
        <nav className='flex justify-between items-center'>
            
            <Link className='text-2xl font-bold' to="/">JobHub</Link>

            <ul className='flex gap-9'>
                <li className='my-custom'>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className='my-custom'>
                    <NavLink to="/statistics">Statistics</NavLink>
                </li>
                <li className='my-custom'>
                    <NavLink to="/jobs">Applied Jobs</NavLink>
                </li>
                <li className='my-custom'>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
            </ul>
            <button className='cornflower-blue p-2 rounded'>Star Applying</button>
        </nav>
    );
};

export default Header;