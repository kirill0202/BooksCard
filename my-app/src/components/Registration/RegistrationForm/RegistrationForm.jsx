import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import { required, LengthCreator, isMatchPassword} from '../../../utils/validate';
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
               placeholder='Введите пароль'
               classnamestyle="form__password form__input"
               name="password"
               type="password"
               validate={[required, minLengthPasswod, isMatchPassword]}
               />
            </div>
            <div className="form__register-input">
               <Field
               component={Input}
               placeholder='Введите еще пароль'
               classnamestyle="form__password form__input"
               name="password__repeat"
               type="password"
               validate={[required, minLengthPasswod, isMatchPassword]}
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
