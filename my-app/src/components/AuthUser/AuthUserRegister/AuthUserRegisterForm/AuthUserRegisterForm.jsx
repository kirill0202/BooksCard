import React from 'react';
import './AuthUserRegisterForm.scss';
import { Field, reduxForm } from 'redux-form';
import Input from '../../../Input/Input';
import Button from '../../../Button/Button';
import { required, LengthCreator } from '../../../../utils/validate';



const minLingthPasswod = LengthCreator(6);

const AuthUserRegisterForm = ({ handleSubmit, disabled }) => {
   
    return (
        <form onSubmit={handleSubmit}>
            <div className="form__register-input">
              <Field
               component={Input}
               placeholder={'Введите email'}
               classnamestyle='form__register form__input'
               name="email__register"
               validate={[required]}
              />
            </div>
            <div className="form__register-input">
               <Field
               component={Input}
               placeholder='Введите password'
               classnamestyle="form__password form__input"
               name="password__register"
               type="password"
               validate={[required, minLingthPasswod]}
               />
            </div>
            <Button title={'Регистрация'} classnamestyle="form__sumbit-register" disabled={disabled}/>
        </form>
    )
}
const AuthUserRegisterContainerForm = reduxForm({
    form: 'AuthUserRegisterForm'
})(AuthUserRegisterForm);


export default AuthUserRegisterContainerForm;
