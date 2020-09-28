import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header () {
    return (
        <div className="header">
            <div className="header__left">
                <Link to="/" className="header__headerLink">
                    <div className="header__icon"></div>
                    <span className="header__title">DELISH</span>
                </Link>
            </div>
        </div>
    )
}

export default Header;