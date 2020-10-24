import React, { useState } from 'react';

import { Button, Title, Input, LinkGrey, LinkBlue, Right75, Left25 } from '../Styles/Logon';
import {FlexCenter} from '../Styles/FlexCenter';
import logo_umc from '../img/logo_umc.png';

import Api from '../services/api';
import { history } from '../services/history';

export default function Logon() {
  const [Email, setEmail] = useState("");
  const [Senha, setPassword] = useState("");
  
  localStorage.setItem('token', "0");

  async function handleSubmit(event) {
    event.preventDefault();

    const headers = {
      'Content-Type': 'application/json'
    }

    try {
      const response = await Api.post('/auth/', { Email, Senha }, {
        headers: headers
      });
      const user = response.data.auth;
      console.log(user);
      if(response.data.auth.Type === "participante"){
        localStorage.token = user.token;
        localStorage.setItem('type', user.Type);
        history.push("/todos-eventos");
      }
      else if (response.data.auth.Type === "coordenador" && response.data.auth.isGestor === false) {
        localStorage.token = user.token;
        localStorage.setItem('type', user.Type);
        history.push("/meus-eventos");
      }
      else if (response.data.auth.Type === "coordenador" && response.data.auth.isGestor === true) {
        localStorage.token = user.token;
        localStorage.setItem('type', user.Type);
        history.push("/coordenadores");
      }
      
        
    } catch (err) {
      if (err.response) {
        console.log(err.response.data.error);
        alert(err.response.data.error)
      }
     
    }
  }

  return (
    <FlexCenter>
      <Left25>
        <img src={logo_umc} width="65%" alt="logo_umc"/>
        <Title>Eventos e Palestras</Title>
        <form onSubmit={handleSubmit}>
          <Input 
            type="email" 
            placeholder="Email"
            value={Email}
            onChange={e => setEmail(e.target.value)}
            required/>
          <Input 
            type="password" 
            placeholder="Senha" 
            value={Senha}
            onChange={e => setPassword(e.target.value)}
            required/>
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