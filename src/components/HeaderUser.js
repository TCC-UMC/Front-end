import React from 'react';
import { Header, NavItem, Logout } from '../Styles/Header';

const HeaderUser = () => (
  <Header>
    <NavItem activeClassName="active" to="/eventos">
      Eventos
    </NavItem>
    <NavItem to="/eventos-participados">
      Eventos Participados
    </NavItem>
    <NavItem to="/perfil-user">
      Editar Perfil
    </NavItem>
    <Logout to="/">Sair</Logout>
  </Header>
);

export default HeaderUser;
