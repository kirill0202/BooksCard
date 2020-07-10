import React from 'react';
import './PopupList.scss';
import Button from '../../Button/Button'
import { useDispatch } from 'react-redux';
import { actionRemoveCart } from '../../../store/actions/actionCart/actionRemoveCart';

const PopupList = ({ title, id }) => {
    const dispatch = useDispatch();
    const handleRemoveBookCart = () => {
        const cartId = id
        dispatch(actionRemoveCart(cartId))
    }
    return (
        <div className="popup">
            <div className="popup__wrapper">
                <div className="popup__content">
                    <div className="popup__content-item">
                        <p className="popup__content-title">
                            {title}
                        </p>
                    </div>
                    <div className="popup__content-item">
                        <Button
                            classnamestyle="popup__content-button"
                            title={'remove'}
                            onClick={handleRemoveBookCart} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PopupList;