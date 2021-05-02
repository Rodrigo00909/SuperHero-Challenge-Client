import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/logo.png';

const Menu = () => {
    return (
        <header className="app-header">
            <img src={Logo} alt="Logo Heroes" className="app-logo" />
            <h3 className="author">Made with Love for <span>Dario Rodrigo Torres</span></h3>
            <nav className="nav-principal">
                {/* <Link to={'/home'}>Home</Link> */}
                <Link to={'/search'}>Search</Link>
                <Link to={'/'}><a href="#">Log Out</a></Link>

            </nav>
        </header>
    )
}

export default Menu
