import React, { useCallback, useEffect } from 'react';
import AuthUserRegisterContainerForm from './AuthUserRegisterForm/AuthUserRegisterForm';
import './AuthUserRegister.scss';
import { Link } from 'react-router-dom';
import { useHttp } from '../../../hooks/http.hook';
import useMessage from '../../../hooks/message.hook';

const AuthUserRegister = () => {
  const { loading, error, request, clearError } = useHttp();
  const messageToast = useMessage();
  const registerHandler = async (values) => {
    const dataForm = {
      email: values.email__register,
      password: values.password__register
    }
    try {
      const data = await request('/api/auth/register', 'POST', { ...dataForm })
    } catch (e) { }
  }
 useEffect(()=> {
  setTimeout(() => {
    clearError()
  }, 8000);
 }, [clearError])
  return (
    <div className="register">
      <div className="register__wrapper">
        <div className="register__content">
          <h1 className="register__content-title">
            Регистрация
          </h1>
        </div>
        <div className="register__form">
          <AuthUserRegisterContainerForm onSubmit={registerHandler} disabled={loading} error={error} />
        </div>
        <div className="register__footer">
          <Link to={'/Login'} className="register__form-link">
            Войти
            </Link>
        </div>
        {messageToast(error)}
      </div>
    </div>
  )
}
export default AuthUserRegister;