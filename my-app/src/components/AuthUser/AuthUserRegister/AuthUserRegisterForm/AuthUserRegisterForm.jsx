import React from 'react';
import './AuthUserRegisterForm.scss';
import { Field, reduxForm } from 'redux-form';
import Input from '../../../Input/Input';
import Button from '../../../Button/Button';


const AuthUserRegisterForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form__register-input">
              <Field
               component={Input}
               placeholder={'Введите email'}
               classnamestyle='form__register form__input'
               name="email__register"
              />
            </div>
            <div className="form__register-input">
               <Field
               component={Input}
               placeholder='Введите password'
               classnamestyle="form__password form__input"
               name="passwoed__register"
               />
            </div>
            <Button title={'Регистрация'} classnamestyle="form__sumbit-buttom"/>
        </form>
    )
}
const AuthUserRegisterContainerForm = reduxForm({
    form: 'AuthUserRegisterForm'
})(AuthUserRegisterForm);


export default AuthUserRegisterContainerForm;
