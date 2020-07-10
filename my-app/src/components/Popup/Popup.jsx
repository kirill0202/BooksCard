import React from 'react';
import './Popup.scss';
import PopupList from './PopupList/PopupList';
import uniqBy from 'lodash/uniqBy';



const Popup = ({ totalPrice }) => {
    const uniqByTotolalPrice = uniqBy(totalPrice, book => book.id)
    const cartElements = uniqByTotolalPrice.map((book) => {
        return (
            <li key={book.id}>
                <PopupList {...book} />
            </li>)
    })
    return (
        <ul className="popup__items">
            {!cartElements.length ? <p className="popup__notifications">the book basket is empty</p> : cartElements}
        </ul>

    )
}
export default React.memo(Popup);
