import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 34px;
  font-weight: bold;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  color: #FFF;
  font-size: 30px;
  width: 100%;
  height: 100%;
  background: #023E7C;
  &.active {
    background-color: #38B6FF;
  }
`;

export const Logout = styled(Link)`
  border: none;
  color: #FFF;
  font-size: 30px;
  width: 25%;
  background: #023E7C;
  text-decoration: none;
  text-align: center;
`;



