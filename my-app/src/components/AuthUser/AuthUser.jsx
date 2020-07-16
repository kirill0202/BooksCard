import React, { useContext } from 'react';
import './AuthUser.scss';
import { Link } from 'react-router-dom';
import AuthUserContainerForm from './AuthUserForm/AuthUserForm';
import { useHttp } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';



const AuthUser = () => {
     const {loading, error, request}= useHttp();
     const auth = useContext(AuthContext)
 
    const handlerAuthUserForm = async (values) => {
        const authUserFormValue = {
            email: values.login_form,
            password: values.passwod_form
        }
        try{
            const data = await request('/api/auth/login', 'POST', {...authUserFormValue})
            auth.login(data.token, data.userId)
          }catch(e){
    
          }
    }

    return (
            <div className="login">
              <div className="login__wrapper">
                    <div className="login__content">
                        <h1 className="login__content-title">
                           Авторизация
                        </h1> 
                    </div>
                   <div className="login__form">
                        <AuthUserContainerForm onSubmit={handlerAuthUserForm} />
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
