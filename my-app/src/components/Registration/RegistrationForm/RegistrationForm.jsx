import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import { required, LengthCreator } from '../../../utils/validate';
import './RegistrationForm.scss';


const minLengthPasswod = LengthCreator(6);

const RegistrationForm = ({ handleSubmit, disabled }) => {
   
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
               validate={[required, minLengthPasswod]}
               />
            </div>
            <Button title={disabled ? 'Подождите пожалуйста...' : 'Регистрация'} classnamestyle="form__sumbit-register" disabled={disabled}/>
        </form>
    )
}
const RegistrationFormContainer = reduxForm({
    form: 'RegistrationForm'
})(RegistrationForm);


export default React.memo(RegistrationFormContainer);
