import React from 'react';
import { Header, NavItem, Logout } from '../Styles/Header';

const HeaderAdm = () => (
  <Header>
    <NavItem exact activeClassName="active" to="/coordenadores">Coordenadores</NavItem>
    <NavItem exact to="/cadastrar-coordenadores">Cadastrar novo coordenador</NavItem>
    <Logout exact to="/">Sair</Logout>
  </Header>
);

export default HeaderAdm;
