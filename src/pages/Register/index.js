import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css';
import Right75 from '../../components/Right75'

export default function Register() {
  return (
    <div className="register-container container">
        <div className="left25">
          <h2>Digite suas informações e clique em confirmar para se registrar</h2>
          <form>
            <input type="text" placeholder="Nome" required/>
            <input type="email" placeholder="Email" required/>
            <input type="password" placeholder="Senha" required/>
            <input type="text" placeholder="CPF" required/>
            <input type="tel" placeholder="Telefone" required/>
            <input type="text" placeholder="Profissão" required/>
            <input type="date" required/>
            <br/>
            <input type="checkbox" id="checkbox" /> <label>Sou aluno da UMC</label>
            <input type="text" placeholder="RGM" required/>
            <input type="text" placeholder="Curso" required/>
            <Link to="/" className="decoration-none"><button className="button btn-grey">Voltar</button></Link>
            <button className="button btn-green" type="submit">Entrar</button>
            
          </form>
        </div>
        <Right75 />
    </div>
  );
}