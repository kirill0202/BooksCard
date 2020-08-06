import React, { useEffect } from 'react';
import RegistrationFormContainer from './RegistrationForm/RegistrationForm';
import { Link } from 'react-router-dom';
import { useHttp } from '../../hooks/http.hook';
import useMessage from '../../hooks/message.hook';
import Video from '../Video/Video';
import { login } from '../../path/path';
import './Registration.scss';

const Registration = () => {
  const { loading, error, request, clearError } = useHttp();
  const messageToast = useMessage();
  const registerHandler = async (values) => {
    const dataForm = {
      email: values.email__register,
      password: values.password
    }
    try {
      await request('/api/auth/register', 'POST', { ...dataForm })
    } catch (e) { }
  }


  useEffect(() => {
    setTimeout(() => {
      clearError()
    }, 8000);
  }, [error, messageToast, clearError])

  return (
    <div className="registration">
      <div className="register__video">
        <Video />
      </div>
      <div className="registration__content">
        <div className="registration__wrapper">
          <h1 className="registration__content-title">
            Регистрация
          </h1>
          <div className="registration__form">
            <RegistrationFormContainer onSubmit={registerHandler} disabled={loading} error={error} />
          </div>
          <div className="registration__footer">
            <Link to={login} className="registration__form-link">
              Войти
            </Link>
          </div>
          {messageToast(error)}
        </div>
      </div>
    </div>
  )
}
export default Registration;