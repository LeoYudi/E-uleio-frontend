import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import Cart from './pages/Ecommerce/Cart';
import Home from './pages/Ecommerce/Home';
import Ecommerce from './pages/Ecommerce';
import Login from './pages/Login';
import Profile from './pages/Ecommerce/Profile';

export const EcommerceRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            <PrivateRoute path="/profile" component={Profile} />
        </Switch>
    );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
            )
        }
    />
);

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" component={Ecommerce} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;