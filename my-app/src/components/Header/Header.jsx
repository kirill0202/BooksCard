import React, { useState, useContext } from 'react';
import Popup from '../Popup/Popup';
import "./Header.scss";
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router';


const Header = (cardData) => {
    const auth = useContext(AuthContext);
    const history = useHistory();
    const { totalPrice, countBooks } = cardData;
    const [popup, setPopup] = useState(false);
    const handlePopup = () => {
        setPopup(!popup)
    }
    const logoutHandler = () => {
      auth.logout()
      history.push('/')
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
                <li className="navbar__item" onClick={logoutHandler}>Выход</li>
            </ul>
            {popup && <Popup totalPrice={totalPrice}/>}
        </nav>
    )
}
export default React.memo(Header);