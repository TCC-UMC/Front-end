import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background: #023E7C;
  overflow: hidden;
`;

export const NavItem = styled(NavLink)`
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  &.active {
    background-color: #38B6FF;
  }
  @media(max-width: 800px) {
    font-size: 85%;
  }
`;

export const Logout = styled(Link)`
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
`;



