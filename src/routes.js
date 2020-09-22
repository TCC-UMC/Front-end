import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import RecoverPassword from './pages/RecoverPassword';
import Register from './pages/Register';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/recuperar-senha" component={RecoverPassword} />
                <Route path="/registro" component={Register} />
            </Switch>
        </BrowserRouter>
    );
}
