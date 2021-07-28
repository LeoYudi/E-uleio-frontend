import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Cart from './pages/Cart';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/Cart' component={Cart} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;