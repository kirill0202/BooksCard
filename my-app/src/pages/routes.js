import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import HomePages from './HomePage';
import Registration from '../components/Registration/Registration';
import Login from '../components/Login/Login';
import { home, registration, login } from '../path/path';

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path={home} exact>
                    <HomePages />
                </Route>
                <Redirect to={home} />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path={login} exact>
                <Login/>
            </Route>
            <Route path={registration} exact>
               <Registration/>
            </Route>
            <Redirect to={login} />
        </Switch>
    )
}
export default useRoutes;