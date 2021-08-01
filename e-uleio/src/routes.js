import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Cart from './pages/Ecommerce/Cart';
import Home from './pages/Ecommerce/Home';

import Ecommerce from './pages/Ecommerce';

export const EcommerceRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
        </Switch>
    );
}

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Ecommerce} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;