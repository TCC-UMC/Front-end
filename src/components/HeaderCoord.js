import React from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import { FaBars } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {Header, Menu, Navlink, Logout } from '../Styles/Header';

const HeaderCoord = () =>  (
  <Header>
    <ResponsiveMenu
    menuOpenButton={<FaBars size={30} color="#38B6FF" />}
    menuCloseButton={<AiOutlineCloseCircle size={30} color="#38B6FF" />}
    changeMenuOn="800px"
    largeMenuClassName="large-menu"
    smallMenuClassName="small-menu"
    menu={
      <Menu>
        <ul>
          <li>
            <Navlink activeClassName="active" to="/meus-eventos">Meus eventos</Navlink>
          </li>
          <li>
            <Navlink to="/criar-evento">Criar Evento</Navlink>
          </li>
          <li>
            <Navlink to="/palestrantes">Palestrantes</Navlink>
          </li>
          <li>
            <Navlink to="/locais">Locais</Navlink>
          </li>
          <li>
            <Navlink to="/perfil-coord">Editar perfil</Navlink>
          </li>
          <li>
            <Logout to="/">Sair</Logout>
          </li>
        </ul>
      </Menu>
    }
  />
  </Header>
);


export default HeaderCoord;
