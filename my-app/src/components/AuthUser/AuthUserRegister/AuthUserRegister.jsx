import React, { useCallback, useEffect } from 'react';
import AuthUserRegisterContainerForm from './AuthUserRegisterForm/AuthUserRegisterForm';
import './AuthUserRegister.scss';
import { Link } from 'react-router-dom';
import { useHttp } from '../../../hooks/http.hook';
import useMessage from '../../../hooks/message.hook';
import videoBooks from '../../../video/Book.mp4';

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


  useEffect(() => {
    setTimeout(() => {
      clearError()
    }, 8000);
  }, [error, messageToast, clearError])

  return (
    <div className="register">
      <div className="register__video">
        <video autoPlay loop muted className="register__video-book">
          <source src={videoBooks} />
        </video>
      </div>
      <div className="register__content">
        <div className="register__wrapper">
          <h1 className="register__content-title">
            Регистрация
          </h1>
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
    </div>
  )
}
export default AuthUserRegister;