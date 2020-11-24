import styled from 'styled-components';
import banner_login from '../img/banner_login.jpg';
import {Link} from 'react-router-dom';

export const Left25 = styled.div`
  position: fixed;
  left: 0;
  width: 25%;
  margin-top: 10%;

  img {
    width: 50%;
  }
  @media(max-width: 800px) {
    position: relative;
    width: 100%;
  }
`;

export const Right75 = styled.div`
  width: 75%;
  height: 100%;
  position: fixed;
  right: 0;
  background-image: url(${banner_login});
  background-size: 100% 100%;
  @media(max-width: 800px) {
    display: none;
    width: 0;
  }
`;

export const Title = styled.h2`
  font-size: 25px;
  font-weight: normal;
  text-align: center;
`;

export const Input = styled.input`
  width: 90%;
  font-size: 18px;
  margin: 10px 0;
  padding: 5px 10px;
  border: 1px #ccc solid;
`;

export const LinkBlue = styled(Link)`
  font-size: 22px;
  color: #093E80;
  text-decoration: none;
`;

export const Button = styled.button`
  background-color: ${props => props.buttonColor || "#545454"};;
  color: #fff;
  font-size: 30px;
  padding: 5px 30px;
  border: 0;
  margin-top: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const LinkGrey = styled(Link)`
  font-size: 20px;
  display: block;
  margin-top: 30px;
  color: #333;

`;

export const Text = styled.p`
  font-size: 22px;
  @media(max-width: 800px) {
    font-size: 16px;
  }
`;