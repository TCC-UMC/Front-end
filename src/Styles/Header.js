import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  background: #023E7C;
`;

export const Menu = styled.div`
  border-bottom: 2px solid 023E7C;
  ul {
    padding: 0;
  }
  li {
    display: inline;
    font-size: 13px;
    list-style-type: none;
    margin-left: 25px;
  }
  a {
    text-decoration: none;
    font-size: 24px;
    color: white;
  }
  @media (max-width: 800px) {
    padding: 10px 0;
    li {
      padding: 10px 0;
      display: block;
      margin-left: 0;
    }
  }
`;

export const Logout = styled(NavLink)`
  font-size: 24px;
`;

export const Navlink = styled(NavLink)`
  &.active {
    color: #38B6FF;
  }
`;