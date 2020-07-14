import React from 'react';
import './AuthUser.scss';
import { Link } from 'react-router-dom';
import AuthUserContainerForm from './AuthUserForm/AuthUserForm';



const AuthUser = () => {
    const handleAuthUserFrom = (values) => {
        const authUserFromValue = {
            login: values.login_form,
            password: values.passwod_form
        }
    }
    return (
            <div className="login">
              <div className="login__wrapper">
                    <div className="login__content">
                        <h1 className="login__content-title">
                            Login
                        </h1> 
                    </div>
                   <div className="login__form">
                        <AuthUserContainerForm onSubmit={handleAuthUserFrom} />
                    </div>
                    <div className="login__footer">
                        <Link to={'/Register'} className="login__form-register">
                            Зарегистрироваться?
                        </Link>
                    </div>
                </div> 
            </div>
    )
}
export default AuthUser;
