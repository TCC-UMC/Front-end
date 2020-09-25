import React, { useState } from 'react';
import {Link} from 'react-router-dom' 
import logo_umc from '../img/logo_umc.png'
import { Text, Button, Title, Input, Right75, Left25 } from '../Styles/Logon';
import {FlexCenter} from '../Styles/FlexCenter'

export default function RecoverPassword() {
  const [input, setInput] = useState('');
  
  function handleClick(e) {
    const pattern = /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g;
    const result = pattern.test(input);
    if(result===true) {
      alert('Um link de redefinição de senha foi enviado para o seu email.')
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
          <Input type="email" placeholder="Email" value={input} onInput={e => setInput(e.target.value)} required/>
          <Button buttonColor="#FF1616" type="submit" onClick={handleClick}>Redefinir senha</Button>
        </form>
        <Link to="/" className="decoration-none "><Button>Voltar</Button></Link>
      </Left25>
      <Right75 />
    </FlexCenter>
  );
}