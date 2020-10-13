import React from 'react';
import { Header, NavItem, Logout } from '../Styles/Header';

const HeaderUser = () => (
  <Header>
    <NavItem exact activeClassName="active" to="/todos-eventos">
      Todos eventos
    </NavItem>
    <NavItem exact to="/eventos-participados">
      Eventos Participados
    </NavItem>
    <NavItem exact to="/perfil-user">
      Editar Perfil
    </NavItem>
    <Logout exat to="/">Sair</Logout>
  </Header>
);

export default HeaderUser;
