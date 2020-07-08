import React from 'react';

const Input = ({placeholder, classnamestyle, input, value , onChange}) => {
    return (
        <input 
         type='text' 
         {...input}
         value={value}
         onChange={onChange}
         placeholder={placeholder} 
         className={classnamestyle}/>
    )
}
export default Input;