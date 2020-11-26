import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import {history} from './services/history';
import PrivateRoute from './services/PrivateRoute';

import Logon from './pages/Logon.js';
import ForgotPassword from './pages/ForgotPassword.js';
import ResetPassword from './pages/ResetPassword';
import Register from './pages/Register.js';
import Event from './pages/Event';

import HomeUser from './pages/Users/HomeUser.js';
import EventsUser from './pages/Users/EventsUser.js';
import EditUser from './pages/Users/EditUser';

import HomeCoord from './pages/Coord/HomeCoord.js';
import NewEvent from './pages/Coord/NewEvent';
import EditEvent from './pages/Coord/EditEvent';
import LaunchPresence from './pages/Coord/LaunchPresence';
import Report from './pages/Coord/Reports';
import Panelist from './pages/Coord/Panelist';
import NewPanelist from './pages/Coord/NewPanelist';
import EditCoord from './pages/Coord/EditCoord';
import Places from './pages/Coord/Places';
import NewPlace from './pages/Coord/NewPlace';

import HomeAdm from './pages/Adm/HomeAdm';
import NewCoord from './pages/Adm/NewCoord';

import {GlobalStyle} from './Styles/Global';



export default function Routes() {
    return (
        <Router history={history}>
            <GlobalStyle/>
            <Switch>
                <Route exact path="/" component={Logon} />
                <Route exact path="/recuperar-senha/" component={ForgotPassword} />
                <Route exact path="/registro" component={Register} />
                <Route exact path="/redefinir-senha/:id" component={ResetPassword}/>
                <PrivateRoute exact path="/evento/:id" component={Event}/>
                <PrivateRoute exact path="/lancar-presencas/:id" component={LaunchPresence} />
                <PrivateRoute exact path="/eventos" component={HomeUser} />
                <PrivateRoute exact path="/eventos-participados" component={EventsUser} />
                <PrivateRoute exact path="/perfil-user" component={EditUser} />
                <PrivateRoute exact path="/meus-eventos" component={HomeCoord} />
                <PrivateRoute exact path="/editar-evento/:id" component={EditEvent}/>
                <PrivateRoute exact path="/criar-evento" component={NewEvent} />
                <PrivateRoute exact path="/relatorio/:id" component={Report} />
                <PrivateRoute exact path="/palestrantes" component={Panelist} />
                <PrivateRoute exact path="/locais" component={Places} />
                <PrivateRoute exact path="/cadastrar-local" component={NewPlace} />
                <PrivateRoute exact path="/cadastrar-palestrante" component={NewPanelist} />
                <PrivateRoute exact path="/perfil-coord" component={EditCoord} />
                <PrivateRoute exact path="/coordenadores" component={HomeAdm} />
                <PrivateRoute exact path="/cadastrar-coordenadores" component={NewCoord} />  
            </Switch>
        </Router>
    );
}
