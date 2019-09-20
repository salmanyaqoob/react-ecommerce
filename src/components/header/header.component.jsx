import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.style.scss';

import { auth } from '../../firebase/firebase.util';

const Header = ({ currentUser }) => (
    <header className="header" >
        <Link to="/">
            <Logo className="logo-container" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>
            <Link className="option" to="/contact">
                contact
            </Link>
            {
                currentUser?
                    <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
                :
                <Link className="option" to="/signin">
                    Sign in
                </Link>
            }
        </div>
    </header>
);

export default Header;