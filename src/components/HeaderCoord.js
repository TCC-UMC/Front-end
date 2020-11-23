import React from 'react';
import { Header, NavItem, Logout } from '../Styles/Header';

const HeaderUser = () => (
  <Header>
    <NavItem activeClassName="active" to="/meus-eventos">Meus eventos</NavItem>
    <NavItem to="/criar-evento">Criar Evento</NavItem>
    <NavItem to="/palestrantes">Palestrantes</NavItem>
    <NavItem to="/locais">Locais</NavItem>
    <NavItem to="/perfil-coord">Editar perfil</NavItem>
    <Logout to="/">Sair</Logout>
  </Header>
);

export default HeaderUser;
