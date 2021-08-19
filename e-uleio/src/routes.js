import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import Cart from './pages/Ecommerce/Cart';
import Home from './pages/Home';
import Ecommerce from './pages/Ecommerce';
import Login from './pages/Login';
import Profile from './pages/Ecommerce/Profile';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Products from './pages/Dashboard/Products';
import Details from './pages/Dashboard/Details';
import Clients from './pages/Dashboard/Clients';

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

export const DashboardRoutes = () => {
    return (
      <Switch>
        <PrivateRoute exact path="/dashboard/products" component={Products} />
        <PrivateRoute exact path="/dashboard/products/:productId" component={Details} />
        <PrivateRoute exact path="/dashboard/clients" component={Clients} />
      </Switch>
    )
  }

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/" component={Ecommerce} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;