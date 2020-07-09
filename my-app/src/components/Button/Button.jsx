import React from 'react';


const Button = ({title, classnamestyle}) => {
    return (
        <button className={classnamestyle}>
               {title}
        </button>
    )
}
export default React.memo(Button);