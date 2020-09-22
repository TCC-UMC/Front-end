import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './styles.css';
import Right75 from '../../components/Right75'
import logo_umc from '../../img/logo_umc.png'

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
    <div className="logon-container container recover-container">
        <div className="left25">
          <img src={logo_umc} width="65%" alt=""/>
          <h2>Esqueceu sua senha?</h2>
          <br/>
          <p>Enviaremos um email para redefinição de senha.</p>
          <form>
            <input type="email" placeholder="Email" value={input} onInput={e => setInput(e.target.value)} required/>
            <button className="button btn-red" type="submit" onClick={handleClick}>Redefinir senha</button>
          </form>
          <Link to="/" className="decoration-none "><button className="button btn-grey">Voltar</button></Link>
        </div>
        <Right75 />
    </div>
  );
}