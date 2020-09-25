import React from 'react';
import { Header, NavItem, Logout } from '../Styles/Header';

const HeaderUser = () => (
  <Header>
    <NavItem exact activeClassName="active" to="/meus-eventos">Meus eventos</NavItem>
    <NavItem exact to="/criar-evento">Criar Evento</NavItem>
    <NavItem exact to="/gerar-relatorios">Relatórios</NavItem>
    <NavItem exact to="/palestrantes">Palestrantes</NavItem>
    <Logout exact to="/">Sair</Logout>
  </Header>
);

export default HeaderUser;
