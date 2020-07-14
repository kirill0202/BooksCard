import React from 'react';

const Input = ({placeholder, classnamestyle, input, value , onChange, type}) => {
    return (
        <input 
         type='text' 
         {...input}
         type={type}
         value={value}
         onChange={onChange}
         placeholder={placeholder} 
         className={classnamestyle}/>
    )
}
export default React.memo(Input);