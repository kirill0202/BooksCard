import React from 'react';
import './App.scss';
import useRoutes from '../../pages/routes';
import { useAuth } from '../../hooks/auth.hook';
import { AuthContext } from '../../context/AuthContext';


const App = () => {
  const { token, login, logout, userId } = useAuth();
  const isAutheticated = !!token;
  const routes = useRoutes(isAutheticated)
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId,
      isAutheticated
    }}>
      <div className="App">
        {routes}
      </div>
    </AuthContext.Provider>
  );
}
export default React.memo(App);
