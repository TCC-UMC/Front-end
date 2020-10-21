import React from 'react';
import { Router, BrowserRouter, Route, Switch } from 'react-router-dom';
import {history} from './services/history';
import PrivateRoute from './services/PrivateRoute';

import Logon from './pages/Logon.js';
import RecoverPassword from './pages/RecoverPassword.js';
import Register from './pages/Register.js';

import HomeUser from './pages/Users/HomeUser.js';
import EventsUser from './pages/Users/EventsUser.js';
import EditUser from './pages/Users/EditUser';

import HomeCoord from './pages/Coord/HomeCoord.js';
import NewEvent from './pages/Coord/NewEvent';
import Report from './pages/Coord/Reports';
import Panelist from './pages/Coord/Panelist';
import NewPanelist from './pages/Coord/NewPanelist';
import EditCoord from './pages/Coord/EditCoord';

import HomeAdm from './pages/Adm/HomeAdm';
import NewCoord from './pages/Adm/NewCoord';

import {GlobalStyle} from './Styles/Global';

export default function Routes() {
    return (
        <Router history={history}>
            <GlobalStyle/>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/recuperar-senha" component={RecoverPassword} />
                <Route path="/registro" component={Register} />
                <PrivateRoute path="/todos-eventos" exact component={HomeUser} />
                <PrivateRoute path="/eventos-participados" exact component={EventsUser} />
                <PrivateRoute path="/perfil-user" exact component={EditUser} />
                <PrivateRoute path="/meus-eventos" exact component={HomeCoord} />
                <PrivateRoute path="/criar-evento" exact component={NewEvent} />
                <PrivateRoute path="/gerar-relatorios" exact component={Report} />
                <PrivateRoute path="/palestrantes" exact component={Panelist} />
                <PrivateRoute path="/cadastrar-palestrante" exact component={NewPanelist} />
                <PrivateRoute path="/perfil-coord" exact component={EditCoord} />
                <PrivateRoute path="/coordenadores" exact component={HomeAdm} />
                <PrivateRoute path="/cadastrar-coordenadores" exact component={NewCoord} />  
            </Switch>
        </Router>
    );
}
