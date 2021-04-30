import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <header className="app-header">
            <h3 className="nombre-usuario">logo</h3>

            <nav className="nav-principal">
                <Link to={'/home'}>Home</Link>
                <Link to={'/search'}>Search</Link>
                <a href="#">Log Out</a>
            </nav>
        </header>
    )
}

export default Menu
