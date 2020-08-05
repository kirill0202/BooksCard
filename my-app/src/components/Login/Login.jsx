import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHttp } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';
import useMessage from '../../hooks/message.hook';
import LoginFormContainer  from './LoginForm/LoginForm'
import Video from '../Video/Video';
import './Login.scss';



const AuthUserLogin = () => {
    const { loading, error, request, clearError } = useHttp();

    const auth = useContext(AuthContext)
    const messageToast = useMessage();
    const handlerAuthUserForm = async (values) => {
        const authUserFormValue = {
            email: values.login_form,
            password: values.passwod_form
        }
        try {
            const data = await request('/api/auth/login', 'POST', { ...authUserFormValue })
            auth.login(data.token, data.userId)
        } catch (e) { }
    }
    useEffect(() => {
        setTimeout(() => {
            clearError();
        }, 8000);
    }, [error, clearError])

    return (
        <div className="login">
            <div className="login__video">
                <Video/>
            </div>
            <div className="login__content">
                 <div className="login__wrapper">
                        <h1 className="login__content-title">
                            Авторизация
                        </h1>
                        <div className="login__form">
                            <LoginFormContainer onSubmit={handlerAuthUserForm} disabled={loading} error={error} />
                        </div>
                        <div className="login__footer">
                            <Link to={'/Register'} className="login__form-register">
                                Зарегистрироваться?
                        </Link>
                        </div>
                        {messageToast(error)}
                    </div> 
                </div>
        </div>
    )
}
export default React.memo(AuthUserLogin);
