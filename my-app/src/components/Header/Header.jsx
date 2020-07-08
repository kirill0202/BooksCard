import React from 'react';
import "./Header.scss";


const Header = () => {
    return (
        <header className="header">
            <div className="header__content">
               <p className="header___content-title">Lists Books</p>
            </div>
            <div className="header__content-left">
                <p className="header__content-left-result">Итого: <span>0 руб.</span></p>
                <p className="header__content-left-cart">Корзина</p>
            </div>
        </header>
    )
}
export default Header;