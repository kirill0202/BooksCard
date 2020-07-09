import React from 'react';
import "./Header.scss";


const Header = () => {
    
    return (
        <header className="header">
            <div className="header__content">
               <p className="header___content-title">Lists Books</p>
            </div>
            <div className="header__content-left">
                <p className="header__content-left-result">Итого: <span className="header__content-price">0 руб.</span></p>
                <p className="header__content-left-cart">Корзина:  <span className="header__content-card">(0)</span></p>
            </div>
        </header>
    )
}
export default React.memo(Header);