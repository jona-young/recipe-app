import React from 'react';
import './Header.css';

function Header () {
    return (
        <div className="header">
            <div className="header__left">
                <div className="header__icon"></div>
                <span className="header__title">DELISH</span>
            </div>
            <div className="header__right">
                <span className="header__link">Recipes</span>
                <span className="header__link">Equipment</span>
                <span className="header__link">Gallery</span>
            </div>

        </div>
    )
}

export default Header;