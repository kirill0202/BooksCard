import React from 'react';


const Button = ({title, classnamestyle, onClick, disabled}) => {
    return (
        <button className={classnamestyle} onClick={onClick} disabled={disabled}>
               {title}
        </button>
    )
}
export default React.memo(Button);