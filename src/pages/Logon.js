import React from 'react';
import { Button, Title, Input, LinkGrey, LinkBlue, Right75, Left25 } from '../Styles/Logon';
import {FlexCenter} from '../Styles/FlexCenter';
import logo_umc from '../img/logo_umc.png';

export default function Logon() {
  return (
    <FlexCenter>
      <Left25>
        <img src={logo_umc} width="65%" alt="logo_umc"/>
        <Title>Eventos e Palestras</Title>
        <form>
          <Input type="email" placeholder="Email" required/>
            <Input type="password" placeholder="Senha" required/>
            <LinkBlue to="/recuperar-senha">   
              Esqueci minha senha
            </LinkBlue>
            <Button type="submit" buttonColor="#008037">Entrar</Button>
        </form>
        <LinkGrey to="/registro"> Não tem conta? Registrar-se </LinkGrey>
      </Left25>
      <Right75 />
    </FlexCenter>

  );
}