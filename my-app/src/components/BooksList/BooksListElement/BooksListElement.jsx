import React from 'react';
import './BooksListElement.scss';
import Button from '../../Button/Button';


const BooksListElements = ({ title, image, price, author }) => {
    return (
        <div className="card">
            <div className="card__wrapper">
                <div className="card__content">
                    <div className="card__content-image">
                        <img src={image} alt="image__books" className="card__content-image" />
                    </div>
                    <div className="footer__card">
                        <p className="footer__card-title">{title}</p>
                        <p className="footer__card-author">{author}</p>
                        <Button title={'добавить в корзину'} classnamestyle={'footer__card-button'}/>
                        <p className="footer__card-price"><i className="fas fa-ruble-sign footer__card-ruble"></i>{price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default React.memo(BooksListElements);
