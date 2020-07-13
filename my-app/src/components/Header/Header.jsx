import React, { useState } from 'react';
import Popup from '../Popup/Popup';
import "./Header.scss";


const Header = (cardData) => {
    const { totalPrice, countBooks } = cardData;
    const [popup, setPopup] = useState(false);
    const handlePopup = () => {
        setPopup(!popup)
    }
    const totalPriceBook = totalPrice.reduce((total, book) => total + book.price, 0);
    return (
        <nav className="navbar">
            <div className="navbar__content">
                <h3 className="navbar__content-title">Books List</h3>
            </div>
            <ul className="navbar__items">
                <li className="navbar__item">Цена ({totalPriceBook}) руб.</li>
                <li className="navbar__item" onClick={handlePopup}>Корзина ({countBooks})</li>
            </ul>
            {popup && <Popup totalPrice={totalPrice}/>}
        </nav>
    )
}
export default React.memo(Header);