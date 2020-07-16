import React from 'react';
import { Field, reduxForm } from "redux-form";
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import './AuthUserForm.scss';
import { required, LengthCreator } from '../../../utils/validate';



const minLengthPassword = LengthCreator(6);

const AuthUserForm = ({ handleSubmit, disabled}) => {
 
    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form__input-login">
                <Field
                    component={Input}
                    placeholder="email"
                    type="text"
                    name="login_form"
                    classnamestyle="form__login form__input"
                    validate={[required,]}
                />
            </div>
            <div className="form__input-login">
                <Field
                    component={Input}
                    placeholder="passwod"
                    type="password"
                    name="passwod_form"
                    classnamestyle="form__password form__input"
                    validate={[required, minLengthPassword]}
                />
            </div>
            <Button title={disabled ?  'Вход...' : 'Войти'} classnamestyle="form__sumbit-login" disabled={disabled}/>
        </form>
    )
}
const AuthUserContainerForm = reduxForm({
    form: "AuthUserForm",
})(AuthUserForm);

export default React.memo(AuthUserContainerForm);