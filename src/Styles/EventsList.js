import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const List = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
`;

export const Event = styled.div`
  background: #FFF;
  border: 1px solid #DDD;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const DateTime = styled.p`
  color: #0098ab;
  font-size: 14px;
`;

export const TitleDiv = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

export const LinkBlue = styled(Link)`
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
  border: 2px solid #195088;
  color: #195088;
  font-weight: bold;
  font-size: 12px;
  display: inline-block;
  margin: 5px;
  &:hover {
    background-color: #0098ab;
    color: #FFF;
    border: none;
  }
`;

export const Venue = styled.p``;

export const Button = styled.button`
  height: 40px;
  border-radius: 5px;
  border: 2px solid #195088;
  background: none;
  margin: 5px;
  color: #195088;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #0098ab;
    color: #FFF;
    border: none;
  }
`;

export const DivForm = styled.div`
  text-align: center;
  font-size: 24px;
  display: grid;
  justify-content: center;
  form {
    border: 1px solid #DDD;
    border-radius: 5px;
    padding: 20px;
  }
`;