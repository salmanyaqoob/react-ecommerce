import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.style.scss';

const Header = () => (
    <header className="header" >
        <Link to="/">
            <Logo className="logo-container" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>
            <Link className="option" to="/shop">
                Shop
            </Link>
            <Link className="option" to="/shop">
                Shop
            </Link>
            <Link className="option" to="/shop">
                Shop
            </Link>
        </div>
    </header>
);

export default Header;