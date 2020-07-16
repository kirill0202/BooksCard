import React from 'react';
import './Alert.scss';



const Alert = ({ text }) => {
   
    return (
        <>
            {text ? <div className="toast toast__error">
                <div className="Toast__message">
                    <div className="Toast__message-category"></div>
                    {text}
                </div>
            </div> : text}
        </>
    )
}
export default Alert;