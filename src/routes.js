import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon.js';
import RecoverPassword from './pages/RecoverPassword.js';
import Register from './pages/Register.js';

import HomeUser from './pages/Users/HomeUser.js';
import EventsUser from './pages/Users/EventsUser.js';

import HomeCoord from './pages/Coord/HomeCoord.js';
import NewEvent from './pages/Coord/NewEvent';
import Report from './pages/Coord/Reports';
import Panelist from './pages/Coord/Panelist';
import NewPanelist from './pages/Coord/NewPanelist';

import HomeAdm from './pages/Adm/HomeAdm';
import NewCoord from './pages/Adm/NewCoord';

import {GlobalStyle} from './Styles/Global';

export default function Routes() {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/recuperar-senha" component={RecoverPassword} />
                <Route path="/registro" component={Register} />
                <Route path="/todos-eventos" exact component={HomeUser} />
                <Route path="/eventos-participados" exact component={EventsUser} />
                <Route path="/meus-eventos" exact component={HomeCoord} />
                <Route path="/criar-evento" exact component={NewEvent} />
                <Route path="/gerar-relatorios" exact component={Report} />
                <Route path="/palestrantes" exact component={Panelist} />
                <Route path="/cadastrar-palestrante" exact component={NewPanelist} />
                <Route path="/coordenadores" exact component={HomeAdm} />
                <Route path="/cadastrar-coordenadores" exact component={NewCoord} />  
            </Switch>
        </BrowserRouter>
    );
}
