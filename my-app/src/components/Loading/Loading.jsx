import React from 'react';
import './Loading.scss';

const Loading = () => {
    return (
        <div className="wrapper">
            <div className="loader">
                <div className="loader__title">Loading</div>
                <div className="loader__dots">
                    <div className="loader__dots-item"></div>
                    <div className="loader__dots-item"></div>
                    <div className="loader__dots-item"></div>
                    <div className="loader__dots-item"></div>
                </div>
            </div>
        </div>
    )
}
export default React.memo(Loading);