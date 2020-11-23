import React from 'react';
import { Header, NavItem, Logout } from '../Styles/Header';

const HeaderAdm = () => (
  <Header>
    <NavItem activeClassName="active" to="/coordenadores">Coordenadores</NavItem>
    <NavItem to="/cadastrar-coordenadores">Cadastrar novo coordenador</NavItem>
    <Logout to="/">Sair</Logout>
  </Header>
);

export default HeaderAdm;
