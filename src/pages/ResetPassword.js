import React, { useState } from 'react';
import {Link, useLocation} from 'react-router-dom' 
import { history } from '../services/history';
import Api from '../services/api';

import { Text, Right75 } from '../Styles/Logon';
import { InputRegister, Left25R, ButtonR } from '../Styles/Register';
import { FlexCenter } from '../Styles/FlexCenter';

import logo_umc from '../img/logo_umc.png';

export default function ResetPassword() {
  const [Senha, setPassword] = useState('');
  const [ConfirmarSenha, setConfirmarSenha] = useState('');

  const location = useLocation();
  let search = location.search;
  let params = new URLSearchParams(search);
  const Token = params.get('token');


  async function handleRegister(e) {
    e.preventDefault();

    if(Senha !== ConfirmarSenha) {
      return alert('As senhas precisam ser iguais.');
    }

    const headers = {
      'Content-Type': 'application/json'
    }

    const data = {
      Token,
      Senha
    };
  
    try {
      const response = await Api.post('/auth/reset-password', data, {
        headers: headers
      });
      
      if (response.status === 200) {
        console.log(response);
        alert("Senha alterada com sucesso.");
        return history.push('/');
      }
    } catch(err) {
      if (err) {
        console.log(err.response.data.error);
        alert(err.response.data.error)
      }
    }
    
  }

  return (
    <FlexCenter>
        <Left25R>
          <img src={logo_umc} width="65%" alt="logo_umc"/>
          <Text>Digite suas informações e clique em confirmar para se registrar</Text>
          <form onSubmit={handleRegister}>
            <InputRegister type="password" 
              placeholder="Senha" 
              value={Senha}
              onChange={e => setPassword(e.target.value)}
              required />

            <InputRegister type="password"
              placeholder="Confirmar senha"
              value={ConfirmarSenha}
              onChange={e => setConfirmarSenha(e.target.value)}
              required />

            <ButtonR buttonColor="#008037" type="submit">Alterar</ButtonR>

            <Link to="/" className="decoration-none">
              <ButtonR>Voltar</ButtonR>
            </Link>
          </form>
        </Left25R>
        <Right75 />
    </FlexCenter>
  );
}