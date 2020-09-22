import React from 'react';
import { Link} from 'react-router-dom'
import './styles.css';
import Right75 from '../../components/Right75'
import logo_umc from '../../img/logo_umc.png'

export default function Logon() {
  return (
    <div className="logon-container container">
        <div className="left25">
          <img src={logo_umc} width="65%" alt=""/>
          <h2>Eventos e Palestras</h2>
          <form>
            <input type="email" placeholder="Email" required/>
            <input type="password" placeholder="Senha" required/>
            <Link className="link-blue decoration-none" to="/recuperar-senha">   
              Esqueci minha senha
            </Link>
            <button className="button btn-green" type="submit">Entrar</button>
            
          </form>
          <p className="link-register"><Link to="/registro"> Não tem conta? Registrar-se </Link></p>
        </div>
        <Right75 />
    </div>
  );
}