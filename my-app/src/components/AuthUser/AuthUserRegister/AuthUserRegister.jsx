import React from 'react';
import AuthUserRegisterContainerForm from './AuthUserRegisterForm/AuthUserRegisterForm';
import './AuthUserRegister.scss';
import { Link } from 'react-router-dom';

const AuthUserRegister = () => {
  return (
    <div className="register">
      <div className="register__wrapper">
        <div className="register__content">
          <h1 className="register__content-title">
            Register
          </h1>
        </div>
        <div className="register__form">
           <AuthUserRegisterContainerForm/>
        </div>
        <div className="register__footer">
            <Link to={'/Login'} className="register__form-link">
                Войти
            </Link>
        </div>
      </div>
    </div>
  )
}
export default AuthUserRegister;