import React from 'react';
import './Alert.scss';



const Alert = ({ text }) => {
    return (
        <>
            {text ? <div className="toast toast__error">
                <div className="toast__message">
                    {text}
                </div>
            </div> : text}
        </>
    )
}
export default React.memo(Alert);