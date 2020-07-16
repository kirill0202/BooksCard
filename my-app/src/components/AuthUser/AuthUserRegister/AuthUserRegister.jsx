import React from 'react';
import AuthUserRegisterContainerForm from './AuthUserRegisterForm/AuthUserRegisterForm';
import './AuthUserRegister.scss';
import { Link } from 'react-router-dom';
import { useHttp } from '../../../hooks/http.hook';

const AuthUserRegister = () => {
  const {loading, error, request}= useHttp();
   
  const registerHandler = async (values) => {
     const dataForm = {
       email: values.email__register,
       password: values.password__register
     }
      try{
        const data = await request('/api/auth/register', 'POST', {...dataForm})
      }catch(e){
          
      }
  }
  return (
    <div className="register">
      <div className="register__wrapper">
        <div className="register__content">
          <h1 className="register__content-title">
           Регистрация 
          </h1>
        </div>
        <div className="register__form">
           <AuthUserRegisterContainerForm onSubmit={registerHandler} disabled={loading}/>
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