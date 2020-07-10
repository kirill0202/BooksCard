import React from 'react';


const Button = ({title, classnamestyle, onClick}) => {
    return (
        <button className={classnamestyle} onClick={onClick}>
               {title}
        </button>
    )
}
export default React.memo(Button);