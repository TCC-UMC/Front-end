import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import Api from '../services/api';
import { history } from '../services/history';

import logo_umc from '../img/logo_umc.png'
import { Text, Button, Title, Input, Right75, Left25 } from '../Styles/Logon';
import {FlexCenter} from '../Styles/FlexCenter'

export default function RecoverPassword() {
  const [input, setInput] = useState('');
  
  async function handleClick(e) {
    e.preventDefault();
    const headers = {
      'Content-Type': 'application/json'
    }

    const pattern = /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-zA-Z0-9]{3,9}[.][a-zA-Z0-9]{2,5}/g;
    const result = pattern.test(input);

    if(result) {
      const Email = input;
      try {
        const response = await Api.post('/auth/forgot-password', { Email }, {
          headers: headers
        });
        if (response.status === 200) {
          alert('Email para redefinição de senha enviado com sucesso!');
          history.push("/");
        }
       
      } catch (err) {
        if (err.response) {
          console.log(err.response.data.error);
          alert(err.response.data.error)
        }
       
      }
    }
    else {
      e.preventDefault();
      alert('Email Inválido.');
    }
}

  return (
    <FlexCenter>
      <Left25>
        <img src={logo_umc} width="65%" alt=""/>
        <Title>Esqueceu sua senha?</Title>
        <br/>
        <Text>Enviaremos um email para redefinição de senha.</Text>
        <form>
          <Input 
            type="email" 
            placeholder="Email" 
            value={input} 
            onInput={e => setInput(e.target.value)} 
            required/>
          <Button buttonColor="#FF1616" type="submit" onClick={handleClick}>Redefinir senha</Button>
        </form>
        <Link to="/" className="decoration-none "><Button>Voltar</Button></Link>
      </Left25>
      <Right75 />
    </FlexCenter>
  );
}