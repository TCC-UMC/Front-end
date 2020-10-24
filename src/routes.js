import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
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
                <Route exact path="/" component={Logon} />
                <Route exact path="/recuperar-senha" component={RecoverPassword} />
                <Route exact path="/registro" component={Register} />

                <PrivateRoute role={['user']} exact path="/todos-eventos"  component={HomeUser} />
                <PrivateRoute role={['user']} exact path="/eventos-participados"  component={EventsUser} />
                <PrivateRoute role={['user']} exact path="/perfil-user"  component={EditUser} />
                <PrivateRoute role={['coord']} exact path="/meus-eventos"  component={HomeCoord} />
                <PrivateRoute role={['coord']}  exact path="/criar-evento"  component={NewEvent} />
                <PrivateRoute role={['coord']}  exact path="/gerar-relatorios"  component={Report} />
                <PrivateRoute role={['coord']}  exact path="/palestrantes"  component={Panelist} />
                <PrivateRoute role={['coord']}  exact path="/cadastrar-palestrante"  component={NewPanelist} />
                <PrivateRoute role={['coord']}  exact path="/perfil-coord"  component={EditCoord} />
                <PrivateRoute role={['admin']}  exact path="/coordenadores"  component={HomeAdm} />
                <PrivateRoute role={['admin']}  exact path="/cadastrar-coordenadores"  component={NewCoord} />  
            </Switch>
        </Router>
    );
}
