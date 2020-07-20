import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import HomePages from './HomePage';
import AuthPages from './AuthPages';
import AuthUserRegister from '../components/AuthUser/AuthUserRegister/AuthUserRegister';

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/Home" exact>
                    <HomePages />
                </Route>
                <Redirect to={"/Home"} />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/Login" exact>
                <AuthPages />
            </Route>
            <Route path="/Register" exact>
               <AuthUserRegister/>
            </Route>
            <Redirect to={"/Login"} />
        </Switch>
    )
}
export default useRoutes;