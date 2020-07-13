import React from 'react';
import './BooksListElement.scss';


const BooksListElements = ({ title, image, price, author }) => {
    return (
        <div className="card">
            <div className="card__wrapper">
                <div className="card__content">
                    <div className="card__content-image">
                        <img src={image} alt="book image" className="card__content-image" />
                    </div>
                    <div className="footer__card">
                        <p className="footer__card-title">{title}</p>
                        <p className="footer__card-author">{author}</p>
                        <p className="footer__card-price">{price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BooksListElements;
