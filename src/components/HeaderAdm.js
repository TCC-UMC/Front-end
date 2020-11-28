import React from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import { FaBars } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {Header, Menu, Navlink, Logout } from '../Styles/Header';

const HeaderAdm = () => (
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
              <Navlink activeClassName="active" to="/coordenadores">Coordenadores</Navlink>
            </li>
            <li>
              <Navlink to="/cadastrar-coordenadores">Novo coordenador</Navlink>
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

export default HeaderAdm;
