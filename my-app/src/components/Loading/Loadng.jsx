import React from 'react';
import './Loading.scss';

const Loading = () => {
    return (
        <div className="wrapper">
            <div class="loader">
                <div class="loader__title">Loading</div>
                <div class="loader__dots">
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